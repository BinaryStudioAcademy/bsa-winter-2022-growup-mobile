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
          height: '100%',
          backgroundColor: white,
          padding: DEFAULT_SCREEN_PADDING,
        },
        headerContent: {
          backgroundColor: grey,
        },
      }),
    [white, grey]
  );
};

export default useStyles;
