import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';

import { Select, Text } from 'src/components';
import styles from '../styles';

type SelectProps = React.ComponentPropsWithoutRef<typeof Select>;

type FormSelectProps = Omit<SelectProps, 'value' | 'setValue'> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  containerStyle,
  ...selectProps
}) => {
  const { values, errors, touched, handleChange } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  return (
    <View style={containerStyle}>
      <Select
        value={values[name]}
        setValue={handleChange(name)}
        {...selectProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormSelect;
