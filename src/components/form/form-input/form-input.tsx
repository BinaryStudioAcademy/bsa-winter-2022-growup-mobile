import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';

import { Input, Text } from 'src/components';
import useStyles from '../styles';
import { useColor } from 'src/hooks';

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
  const styles = useStyles();
  const colorInputBg = useColor('INPUT_BACKGROUND');
  const colorError = useColor('ERROR');

  const { values, errors, touched, setFieldValue, handleBlur } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  const handleChange = (text: string) => setFieldValue(name, text);

  return (
    <View style={containerStyle}>
      <Input
        value={values[name]}
        onChangeText={handleChange}
        onBlur={handleBlur(name)}
        outlineColor={!error ? colorInputBg : colorError}
        {...inputProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormInput;
