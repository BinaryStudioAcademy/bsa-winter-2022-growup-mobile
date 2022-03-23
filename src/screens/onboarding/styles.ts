import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const white = useColor('WHITE');
  const accent = useColor('ACCENT');

  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          backgroundColor: white,
          height: '100%',
          justifyContent: 'space-between',
        },
        content: {
          flex: 1,
        },
        buttonContainer: {
          marginBottom: 15,
          paddingHorizontal: 20,
        },
        completeButton: {
          borderWidth: 2,
          borderColor: accent,
        },
      }),
    [white, accent]
  );
};

export default useStyles;
