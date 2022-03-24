import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const primary = useColor('PRIMARY');

  return useMemo(
    () =>
      StyleSheet.create({
        question: {
          color: primary,
          marginLeft: 10,
          fontSize: 20,
        },
        answersContainer: {
          marginVertical: 10,
        },
        answerContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          margin: 10,
        },
        answerText: {
          flex: 1,
          flexWrap: 'wrap',
        },
      }),
    [primary]
  );
};

export default useStyles;
