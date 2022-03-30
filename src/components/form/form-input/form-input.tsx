import React, { useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';

import { Input, Text } from 'src/components';
import useStyles from '../styles';
import { useColor } from 'src/hooks';

type InputProps = React.ComponentPropsWithoutRef<typeof Input>;

type FormInputProps = Omit<InputProps, 'value' | 'onChangeText' | 'onBlur'> & {
  name: string;
  trimValue?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormInput: React.FC<FormInputProps> = ({
  name,
  containerStyle,
  trimValue = true,
  ...inputProps
}) => {
  const styles = useStyles();
  const colorInputBg = useColor('INPUT_BACKGROUND');
  const colorError = useColor('ERROR');

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur: handleFormikBlur,
  } = useFormikContext<FormikValues>();

  const [userValue, setUserValue] = useState<string>(String(values[name]));

  const error = touched[name] && errors[name];

  const handleChange = (text: string) => {
    setFieldValue(name, trimValue ? text.trim() : text);
  };

  // Native onBlur passes any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBlur = (event: any) => {
    if (trimValue) {
      setUserValue(val => val.trim());
    }

    handleFormikBlur(name)(event);
  };

  return (
    <View style={containerStyle}>
      <Input
        value={userValue}
        onChangeText={handleChange}
        onBlur={handleBlur}
        outlineColor={!error ? colorInputBg : colorError}
        {...inputProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormInput;
