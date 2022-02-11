import React from 'react';
import { TextInput } from 'react-native-paper';

import { AppColor } from 'src/common/enums';
import styles from './styles';
import theme from './theme';

type InputProps = React.ComponentPropsWithoutRef<typeof TextInput>;

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  style,
  ...textInputProps
}) => {
  return (
    <TextInput
      style={[styles.inputContainer, style]}
      label={label}
      placeholder={placeholder}
      theme={theme}
      mode="flat"
      activeUnderlineColor={AppColor.ACCENT}
      {...textInputProps}
    />
  );
};

export default Input;
