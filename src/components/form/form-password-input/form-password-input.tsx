import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';

import { FormInput } from 'src/components';
import styles from '../styles';

type FormInputProps = React.ComponentPropsWithoutRef<typeof FormInput>;

type FormPasswordInputProps = Omit<FormInputProps, 'right'>;

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  ...inputProps
}) => {
  const [secure, setSecure] = useState(true);

  const handleChangePasswordSecure = () => {
    setSecure(!secure);
  };

  return (
    <FormInput
      {...inputProps}
      secureTextEntry={secure}
      right={
        <TextInput.Icon
          name="eye"
          style={styles.formIcon}
          onPress={handleChangePasswordSecure}
        />
      }
    />
  );
};

export default FormPasswordInput;
