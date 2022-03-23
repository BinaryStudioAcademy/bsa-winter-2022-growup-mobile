import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { DEFAULT_SCREEN_PADDING } from 'src/styles';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        content: {
          flex: 1,
        },
        screen: {
          flex: 1,
          paddingTop: DEFAULT_SCREEN_PADDING,
          paddingHorizontal: DEFAULT_SCREEN_PADDING,
        },
        logo: {
          height: 48,
          alignSelf: 'center',
          marginVertical: DEFAULT_SCREEN_PADDING * 4,
          resizeMode: 'contain',
        },
        footer: {
          padding: DEFAULT_SCREEN_PADDING,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }),
    []
  );
};

export default useStyles;
