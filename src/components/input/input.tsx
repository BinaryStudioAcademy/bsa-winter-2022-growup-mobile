import React from 'react';
import { Control, FieldValues, useController } from 'react-hook-form';
import { TextStyle } from 'react-native';
import { TextInput } from 'react-native-paper';

import { AppColor } from 'src/common/enums';
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
<<<<<<< HEAD
      ref={field.ref}
      value={field.value}
      label={label}
      placeholder={placeholder}
      mode="flat"
      activeUnderlineColor={AppColor.ACCENT}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
=======
      value={field.name}
      label={label}
      placeholder={placeholder}
      mode="flat"
      activeUnderlineColor={AppColors.ACCENT}
      onChangeText={field.onChange}
>>>>>>> c613552 (feat: input component added)
    />
  );
};

export default Input;
