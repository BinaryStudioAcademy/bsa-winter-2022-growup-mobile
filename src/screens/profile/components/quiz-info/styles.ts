import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        quizHeader: {
          marginVertical: 10,
        },
        quizContent: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    []
  );
};

export default useStyles;
