import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';

import { DateInput, Text } from 'src/components';
import styles from '../styles';

type DateInputProps = React.ComponentPropsWithoutRef<typeof DateInput>;

type FormDateProps = Omit<DateInputProps, 'value' | 'onChange' | 'onBlur'> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormDate: React.FC<FormDateProps> = ({
  name,
  containerStyle,
  ...inputProps
}) => {
  const { values, errors, touched, setFieldValue, handleBlur } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  const handleChange = (date: Date | undefined) => setFieldValue(name, date);

  return (
    <View style={containerStyle}>
      <DateInput
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur(name)}
        {...inputProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormDate;
