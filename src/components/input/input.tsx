import React, { Ref } from 'react';
import { TextInput as RNTextInput } from 'react-native';
import { TextInput } from 'react-native-paper';

import { useColor } from 'src/hooks';
import useStyles from '../shared/input-style/styles';

type InputProps = React.ComponentPropsWithoutRef<typeof TextInput> & {
  ref?: Ref<RNTextInput>;
};

const Input: React.FC<InputProps> = React.forwardRef(
  ({ label, placeholder, style, ...textInputProps }, ref) => {
    const styles = useStyles();
    const colorAccent = useColor('ACCENT');

    return (
      <TextInput
        ref={ref}
        style={[styles.inputContainer, style]}
        label={label}
        placeholder={placeholder}
        mode="outlined"
        activeUnderlineColor={colorAccent}
        {...textInputProps}
      />
    );
  }
);

export default Input;
