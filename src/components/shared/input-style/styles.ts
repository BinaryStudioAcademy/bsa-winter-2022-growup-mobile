import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const black = useColor('BLACK');
  const inputBg = useColor('INPUT_BACKGROUND');

  return useMemo(
    () =>
      StyleSheet.create({
        inputContainer: {
          backgroundColor: inputBg,
          borderRadius: 8,
        },
        label: {
          color: black,
        },
      }),
    [inputBg, black]
  );
};

export default useStyles;
