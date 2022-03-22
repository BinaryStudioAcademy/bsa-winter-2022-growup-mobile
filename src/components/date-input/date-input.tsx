import React from 'react';
import { DatePickerInput } from 'react-native-paper-dates';

import { AppColor } from 'src/common/enums';
import styles from '../shared/input-style/styles';

type DatePickerInputProps = React.ComponentPropsWithoutRef<
  typeof DatePickerInput
>;

type DateInputProps = Omit<DatePickerInputProps, 'locale'>;

const DateInput: React.FC<DateInputProps> = ({ style, ...textInputProps }) => {
  return (
    <DatePickerInput
      style={[styles.inputContainer, style]}
      mode="outlined"
      locale="en"
      activeUnderlineColor={AppColor.ACCENT}
      {...textInputProps}
    />
  );
};

export default DateInput;
