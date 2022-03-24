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
          justifyContent: 'space-between',
          height: '100%',
        },
        inputContent: {
          marginBottom: 30,
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
        levelValues: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
      }),
    [white]
  );
};

export default useStyles;
