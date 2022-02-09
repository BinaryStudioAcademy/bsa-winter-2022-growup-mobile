import React from 'react';
import { TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';

import { AppColor } from 'src/common/enums';
import styles from './styles';

type IInputProps = {
  label?: string;
  placeholder?: string;
  style?: TextStyle;
  isRounded?: boolean;
};

const Input: React.FC<IInputProps> = ({ label, placeholder, style }) => {
  return (
    <TextInput
      style={{
        ...styles.inputContainer,
        ...style,
      }}
      label={label}
      placeholder={placeholder}
      mode="flat"
      activeUnderlineColor={AppColor.ACCENT}
    />
  );
};

export default Input;
