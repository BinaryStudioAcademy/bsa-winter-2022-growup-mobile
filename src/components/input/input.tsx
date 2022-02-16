import React from 'react';
import { TextInput } from 'react-native-paper';

import { AppColor } from 'src/common/enums';
import styles from '../shared/input-style/styles';

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
      mode="outlined"
      outlineColor="transparent"
      activeUnderlineColor={AppColor.ACCENT}
      {...textInputProps}
    />
  );
};

export default Input;
