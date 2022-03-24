import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';

import { Select, Text } from 'src/components';
import useStyles from '../styles';

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
  const styles = useStyles();

  const { values, errors, touched, setFieldValue } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  const handleChange = (value: unknown) => setFieldValue(name, value);

  return (
    <View style={containerStyle}>
      <Select value={values[name]} setValue={handleChange} {...selectProps} />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormSelect;
