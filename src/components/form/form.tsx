import React from 'react';
import { ScrollView } from 'react-native';
import { Formik, FormikHelpers, FormikValues } from 'formik';

import styles from './styles';

interface OwnProps<TResult> {
  onSubmit: (data: TResult) => void;
}

type ParentProps = Omit<
  React.ComponentPropsWithoutRef<typeof Formik>,
  'onSubmit'
>;

type Props<TResult> = ParentProps & OwnProps<TResult>;

function Form<TResult>({ onSubmit, ...formProps }: Props<TResult>) {
  const handleSubmit = (
    values: FormikValues,
    { resetForm }: FormikHelpers<FormikValues>
  ) => {
    onSubmit(values as TResult);
    resetForm();
  };

  return (
    <ScrollView style={styles.form}>
      <Formik onSubmit={handleSubmit} {...formProps} />
    </ScrollView>
  );
}

export default Form;
