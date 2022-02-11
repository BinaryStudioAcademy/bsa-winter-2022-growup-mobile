import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';
import { FormikErrors } from 'formik';

import { Text } from '..';
import styles from './styles';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Error = string | string[] | FormikErrors<any> | FormikErrors<any>[];

interface Props {
  error?: Error;
  touched?: boolean;
}

const FormField: React.FC<Props> = ({ children, error, touched = true }) => {
  const findFirstError = useCallback(
    (currentError: Error | undefined): string | null => {
      if (!touched || !currentError) {
        return null;
      }

      if (typeof currentError === 'string') {
        return currentError;
      }

      if (Array.isArray(currentError)) {
        if (!currentError.length) {
          return null;
        }

        return findFirstError(currentError[0]);
      }

      return findFirstError(Object.values(currentError) as string[]);
    },
    [touched]
  );

  const firstError = useMemo<string | null>(
    () => findFirstError(error),
    [error, findFirstError]
  );

  return (
    <View style={styles.field}>
      {children}
      {firstError ? <Text style={styles.error}>{firstError}</Text> : null}
    </View>
  );
};

export default FormField;
