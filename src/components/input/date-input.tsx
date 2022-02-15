import React from 'react';
import { DatePickerInput } from 'react-native-paper-dates';

import { AppColor } from 'src/common/enums';
import styles from '../shared/input-style/styles';

type DateInputProps = React.ComponentPropsWithoutRef<typeof DatePickerInput>;

const DateInput: React.FC<DateInputProps> = ({ style, ...textInputProps }) => {
  return (
    <DatePickerInput
      style={[styles.inputContainer, style]}
      mode="flat"
      activeUnderlineColor={AppColor.ACCENT}
      {...textInputProps}
    />
  );
};

export default DateInput;
