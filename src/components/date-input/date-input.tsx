import React from 'react';
import { DatePickerInput } from 'react-native-paper-dates';

import { useColor } from 'src/hooks';
import useStyles from '../shared/input-style/styles';

type DatePickerInputProps = React.ComponentPropsWithoutRef<
  typeof DatePickerInput
>;

type DateInputProps = Omit<DatePickerInputProps, 'locale'>;

const DateInput: React.FC<DateInputProps> = ({ style, ...textInputProps }) => {
  const styles = useStyles();
  const colorAccent = useColor('ACCENT');

  return (
    <DatePickerInput
      style={[styles.inputContainer, style]}
      mode="outlined"
      locale="en"
      activeUnderlineColor={colorAccent}
      {...textInputProps}
    />
  );
};

export default DateInput;
