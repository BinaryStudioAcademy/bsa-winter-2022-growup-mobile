import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';
import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  const white = useColor('WHITE');
  const grey = useColor('GREY');

  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          padding: DEFAULT_SCREEN_PADDING,
          backgroundColor: white,
          justifyContent: 'space-between',
          flex: 1,
        },
        inputContent: {
          marginBottom: 30,
        },
        imageContainer: {
          alignSelf: 'center',
          marginVertical: 10,
        },
        image: {
          backgroundColor: grey,
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
      }),
    [white, grey]
  );
};

export default useStyles;
