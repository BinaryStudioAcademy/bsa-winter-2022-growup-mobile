import React, { useMemo, useRef, useState } from 'react';

import {
  FlatList,
  GestureResponderEvent,
  LayoutRectangle,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { Portal, TouchableRipple } from 'react-native-paper';
import { isFunction } from 'lodash-es';

import { useColor } from 'src/hooks';
import { Input, Text } from '..';
import useStyles from './styles';

type InputProps = Omit<
  React.ComponentPropsWithoutRef<typeof Input>,
  'value' | 'onChangeText' | 'onFocus' | 'onBlur'
>;

type Option = {
  label: string;
  value: string;
};

type AutocompleteSelectProps = InputProps & {
  list: Option[];
  value?: string;
  onChangeText?: (text: string) => void;
};

const AutocompleteSelect: React.FC<AutocompleteSelectProps> = ({
  value,
  list,
  onChangeText,
  ...inputProps
}) => {
  const styles = useStyles();
  const colorShadow = useColor('SHADOW');

  const inputRef = useRef<TextInput | null>(null);
  const [listOpen, setListOpen] = useState<boolean>(false);
  const [inputLayout, setInputLayout] = useState<LayoutRectangle>();

  const handleFocus = () => {
    setListOpen(true);
  };

  const handleOutsideClick = (event: GestureResponderEvent) => {
    if (!inputLayout) {
      return;
    }

    const { pageX, pageY } = event.nativeEvent;

    const isInInputX =
      pageX >= inputLayout.x && pageX <= inputLayout.x + inputLayout.width;

    const isInInputY =
      pageY >= inputLayout.y && pageY <= inputLayout.y + inputLayout.height;

    const isInInput = isInInputX && isInInputY;

    if (isInInput) {
      return;
    }

    inputRef.current?.blur();
    setListOpen(false);
  };

  const handleChange = (text: string) => {
    if (isFunction(onChangeText)) {
      onChangeText(text);
    }
  };

  const handleSelect = ({ value: newValue }: Option) => {
    if (value === newValue) {
      return;
    }

    if (isFunction(onChangeText)) {
      onChangeText(newValue);
    }
  };

  const listTop = useMemo(
    () => (inputLayout?.height ?? 0) + (inputLayout?.y ?? 0),
    [inputLayout]
  );

  return (
    <ScrollView keyboardShouldPersistTaps="always">
      <Input
        ref={inputRef}
        value={value}
        onChangeText={handleChange}
        onFocus={handleFocus}
        onLayout={event => setInputLayout(event.nativeEvent.layout)}
        style={{ zIndex: Number.MAX_SAFE_INTEGER }}
        {...inputProps}
      />
      {listOpen ? (
        <Portal>
          <View style={styles.fill}>
            <View style={[styles.list, { top: listTop }]}>
              <FlatList
                keyboardShouldPersistTaps="handled"
                data={list}
                renderItem={({ item }) => (
                  <TouchableRipple
                    style={styles.option}
                    rippleColor={colorShadow}
                    onPress={() => handleSelect(item)}
                  >
                    <Text>{item.label}</Text>
                  </TouchableRipple>
                )}
              />
            </View>
            <TouchableOpacity
              onPress={handleOutsideClick}
              style={styles.touchablePosition}
            />
          </View>
        </Portal>
      ) : null}
    </ScrollView>
  );
};

export default AutocompleteSelect;
