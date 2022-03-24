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
        subheader: {
          marginTop: 15,
        },
        tagsContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          marginVertical: 5,
        },
        tag: {
          margin: 3,
        },
        user: {
          flexDirection: 'row',
          marginVertical: 5,
        },
        userInfo: {
          marginLeft: 10,
        },
      }),
    [white]
  );
};

export default useStyles;
