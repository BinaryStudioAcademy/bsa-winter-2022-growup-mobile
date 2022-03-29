import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const inputBg = useColor('INPUT_BACKGROUND');

  return useMemo(
    () =>
      StyleSheet.create({
        inputContainer: {
          backgroundColor: inputBg,
          borderRadius: 8,
        },
      }),
    [inputBg]
  );
};

export default useStyles;
