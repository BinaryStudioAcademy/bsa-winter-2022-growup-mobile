import React from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';
import { AppColors } from '../../common/enums';
import styles from './styles';

type IInputProps = {
  label?: string;
  placeholder?: string;
  style?: TextStyle;
  isRounded?: boolean;
  name: string;
  control: Control<FieldValues>;
};

const Input: React.FC<IInputProps> = ({
  label,
  placeholder,
  style,
  name,
  control,
}) => {
  const { field } = useController({ name, control });

  return (
    <TextInput
      style={{
        ...styles.inputContainer,
        ...style,
      }}
      value={field.name}
      label={label}
      placeholder={placeholder}
      mode="flat"
      activeUnderlineColor={AppColors.ACCENT}
      onChangeText={field.onChange}
    />
  );
};

export default Input;
