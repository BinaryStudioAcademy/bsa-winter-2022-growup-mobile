import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  const white = useColor('WHITE');
  const accent = useColor('ACCENT');

  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          backgroundColor: white,
          flex: 1,
          padding: DEFAULT_SCREEN_PADDING,
        },
        content: {
          flex: 1,
        },
        quizItem: {
          justifyContent: 'center',
        },
        questionCount: {
          position: 'absolute',
          top: 0,
          alignSelf: 'center',
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
