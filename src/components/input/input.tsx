import React, { Ref } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInput } from 'react-native-paper';

import { AppColor } from 'src/common/enums';
import styles from '../shared/input-style/styles';

type InputProps = React.ComponentPropsWithoutRef<typeof TextInput> & {
  ref?: Ref<RNTextInput>;
};

const Input: React.FC<InputProps> = React.forwardRef(
  ({ label, placeholder, style, ...textInputProps }, ref) => {
    return (
      <TextInput
        ref={ref}
        style={[styles.inputContainer, style]}
        label={label}
        placeholder={placeholder}
        mode="outlined"
        activeUnderlineColor={AppColor.ACCENT}
        {...textInputProps}
      />
    );
  }
);

export default Input;
