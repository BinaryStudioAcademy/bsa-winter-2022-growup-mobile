import { FormikProps } from 'formik';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { Text } from '..';
import styles from './styles';

interface FormFieldRecepientProps<TValue> {
  value?: TValue;
  handleChange: (text: string) => void;
}

export interface FormFieldProps {
  name: string;
  // eslint-ignore-next-line @typescript-eslint/no-explicit-any
  formikProps: FormikProps<Record<string, any>>;
}

interface Props<TValue> extends FormFieldProps {
  valueFromString?: (text: string) => TValue;
  children: (props: FormFieldRecepientProps<TValue>) => JSX.Element;
}

function FormField<TValue = string>({
  name,
  formikProps,
  valueFromString,
  children,
}: Props<TValue>) {
  const value: TValue = formikProps.values[name] as TValue;

  const error: string | null = useMemo(() => {
    const formikTouched = formikProps.touched[name] as boolean | undefined;

    if (!formikTouched) {
      return null;
    }

    const formikError = formikProps.errors[name] as string | undefined;
    return formikError ?? null;
  }, [formikProps.errors, formikProps.touched, name]);

  const handleChange = useCallback(
    (text: string) => {
      let typedValue: TValue | string = text;

      if (valueFromString) {
        typedValue = valueFromString(text);
      }

      formikProps.validateField(name);
      return formikProps.setFieldValue(name, typedValue);
    },
    [formikProps, name, valueFromString]
  );

  return (
    <View style={styles.field}>
      {children({ value, handleChange })}
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

export default FormField;
