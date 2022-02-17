import React, { useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';
import { TextInput } from 'react-native-paper';

import { Input, Text } from 'src/components';
import styles from '../styles';

type InputProps = React.ComponentPropsWithoutRef<typeof Input>;

type FormPasswordInputProps = Omit<
  InputProps,
  'value' | 'onChangeText' | 'onBlur'
> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormPasswordInput: React.FC<FormPasswordInputProps> = ({
  name,
  containerStyle,
  ...inputProps
}) => {
  const { values, errors, touched, setFieldValue, handleBlur } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  const handleChange = (text: string) => setFieldValue(name, text);

  const [secure, setSecure] = useState(true);

  const handleChangePasswordSecure = () => {
    setSecure(!secure);
  };

  return (
    <View style={containerStyle}>
      <Input
        value={values[name]}
        onChangeText={handleChange}
        onBlur={handleBlur(name)}
        secureTextEntry={secure}
        right={
          <TextInput.Icon
            name="eye"
            style={styles.formIcon}
            onPress={handleChangePasswordSecure}
          />
        }
        {...inputProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormPasswordInput;
