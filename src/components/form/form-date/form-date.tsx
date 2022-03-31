import React from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputEndEditingEventData,
  View,
  ViewStyle,
} from 'react-native';
import { FormikValues, useFormikContext } from 'formik';
import dayjs from 'dayjs';

import { DateInput, Text } from 'src/components';
import { useColor } from 'src/hooks';
import useStyles from '../styles';

type DateInputProps = React.ComponentPropsWithoutRef<typeof DateInput>;

type FormDateProps = Omit<DateInputProps, 'value' | 'onChange' | 'onBlur'> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormDate: React.FC<FormDateProps> = ({
  name,
  containerStyle,
  ...inputProps
}) => {
  const styles = useStyles();
  const colorInputBg = useColor('INPUT_BACKGROUND');
  const colorError = useColor('ERROR');

  const { values, errors, touched, setFieldValue, handleBlur } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  const handleChange = (date: Date | undefined) => setFieldValue(name, date);

  const handleManualEdit = (
    e: NativeSyntheticEvent<TextInputEndEditingEventData>
  ) => {
    const { text } = e.nativeEvent;
    const date = dayjs(text);
    if (date.isValid() && date.year() > 1800) {
      setFieldValue(name, new Date(text));
    } else {
      setFieldValue(name, undefined);
    }
  };

  return (
    <View style={containerStyle}>
      <DateInput
        autoFocus={true}
        value={values[name] ? new Date(values[name]) : undefined}
        onChange={handleChange}
        onEndEditing={handleManualEdit}
        outlineColor={!error ? colorInputBg : colorError}
        onBlur={handleBlur(name)}
        {...inputProps}
      />
      {Boolean(error) && <Text style={styles.dateError}>{error}</Text>}
    </View>
  );
};

export default FormDate;
