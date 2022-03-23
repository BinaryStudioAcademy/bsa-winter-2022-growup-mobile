import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  const white = useColor('WHITE');

  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          padding: DEFAULT_SCREEN_PADDING,
          backgroundColor: white,
          height: '100%',
        },
        content: {
          justifyContent: 'center',
          minHeight: '100%',
        },
        inputContent: {
          marginBottom: 30,
          paddingHorizontal: 10,
        },
        buttonContainer: {
          paddingHorizontal: 20,
        },
        heading: {
          marginBottom: 10,
        },
        button: {
          marginBottom: 10,
        },
        dateInput: {
          marginTop: 15,
        },
      }),
    [white]
  );
};

export default useStyles;
