import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const inputBg = useColor('INPUT_BACKGROUND');

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
        spaceAround: {
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-around',
        },
        block: {
          width: '100%',
        },
        formField: {
          backgroundColor: inputBg,
          height: 45,
          borderRadius: 8,
        },
        topPadded: {
          marginTop: 17,
        },
      }),
    [inputBg]
  );
};

export default useStyles;
