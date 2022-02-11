import React from 'react';
import { DatePickerInput } from 'react-native-paper-dates';

import { AppColor } from 'src/common/enums';
import styles from './styles';

type InputProps = React.ComponentPropsWithoutRef<typeof DatePickerInput>;

const DateInput: React.FC<InputProps> = ({
  label,
  style,

  ...textInputProps
}) => {
  return (
    <DatePickerInput
      style={[styles.inputContainer, style]}
      label={label}
      mode="flat"
      activeUnderlineColor={AppColor.ACCENT}
      {...textInputProps}
    />
  );
};

export default DateInput;
