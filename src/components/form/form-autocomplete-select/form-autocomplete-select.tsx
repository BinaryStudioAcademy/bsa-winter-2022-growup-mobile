import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { FormikValues, useFormikContext } from 'formik';

import { AutocompleteSelect, Text } from 'src/components';
import styles from '../styles';

type AutocompleteSelectProps = React.ComponentPropsWithoutRef<
  typeof AutocompleteSelect
>;

type FormAutocompleteSelectProps = Omit<
  AutocompleteSelectProps,
  'value' | 'onChangeText'
> & {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
};

const FormAutocompleteSelect: React.FC<FormAutocompleteSelectProps> = ({
  name,
  containerStyle,
  ...selectProps
}) => {
  const { values, errors, touched, setFieldValue } =
    useFormikContext<FormikValues>();

  const error = touched[name] && errors[name];

  const handleChange = (value: unknown) => setFieldValue(name, value);

  return (
    <View style={containerStyle}>
      <AutocompleteSelect
        value={values[name]}
        onChangeText={handleChange}
        {...selectProps}
      />
      {Boolean(error) && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default FormAutocompleteSelect;
