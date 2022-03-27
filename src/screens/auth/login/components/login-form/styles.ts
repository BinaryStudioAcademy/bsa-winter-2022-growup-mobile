import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const inputBg = useColor('INPUT_BACKGROUND');

  return useMemo(
    () =>
      StyleSheet.create({
        content: {
          flex: 1,
        },
        container: {
          flex: 1,
        },
        button: {
          marginTop: 10,
        },
        formField: {
          backgroundColor: inputBg,
          height: 45,
          marginTop: 17,
          borderRadius: 8,
        },
      }),
    [inputBg]
  );
};

export default useStyles;
