import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';

import { Input, Text } from 'src/components';
import styles from './styles';

type InputProps = React.ComponentPropsWithoutRef<typeof Input>;

type FormInputProps = Omit<InputProps, 'value' | 'onChangeText' | 'onBlur'> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormInput: React.FC<FormInputProps> = ({
  name,
  containerStyle,
  ...inputProps
}) => {
  const { values, errors, touched, handleChange, handleBlur } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  return (
    <View style={containerStyle}>
      <Input
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...inputProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormInput;