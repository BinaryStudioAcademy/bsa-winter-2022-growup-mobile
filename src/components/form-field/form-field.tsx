import { FormikProps } from 'formik';
import React, { useMemo } from 'react';
import { View } from 'react-native';

import { Text } from '..';
import styles from './styles';

interface FormFieldRecepientProps<TValue> {
  value?: TValue;
  handleChange: (text: string) => void;
}

interface Props<TValue> {
  name: string;
  // eslint-ignore-next-line @typescript-eslint/no-explicit-any
  formikProps: FormikProps<Record<string, any>>;
  valueFromString?: (text: string) => TValue;
  children: (props: FormFieldRecepientProps<TValue>) => JSX.Element;
}

function FormField<TValue = string>({
  name,
  formikProps,
  valueFromString,
  children,
}: Props<TValue>) {
  const value: TValue = useMemo(
    () => formikProps.values[name] as TValue,
    [formikProps.values, name]
  );

  const error: string | null = useMemo(() => {
    const formikTouched = formikProps.touched[name] as boolean | undefined;

    if (!formikTouched) {
      return null;
    }

    const formikError = formikProps.errors[name] as string | undefined;
    return formikError ?? null;
  }, [formikProps.errors, formikProps.touched, name]);

  const handleChange = (text: string) => {
    if (valueFromString) {
      const valueForFullObject: TValue = valueFromString(text);
      return formikProps.setFieldValue(name, valueForFullObject);
    }

    return formikProps.setFieldValue(name, value);
  };

  return (
    <View style={styles.field}>
      {children({ value, handleChange })}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

export default FormField;
