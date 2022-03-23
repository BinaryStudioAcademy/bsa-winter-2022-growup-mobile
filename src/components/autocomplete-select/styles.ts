import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useColor } from 'src/hooks';

const useStyles = () => {
  const black = useColor('BLACK');
  const invisible = useColor('INVISIBLE');
  const white = useColor('WHITE');

  return useMemo(
    () =>
      StyleSheet.create({
        list: {
          position: 'absolute',
          left: 0,
          right: 0,
          zIndex: 3,
          maxHeight: 150,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowColor: black,
          shadowRadius: 5,
          elevation: 5,
          backgroundColor: invisible,
        },
        option: {
          backgroundColor: white,
          paddingVertical: 10,
          paddingHorizontal: 20,
        },
        fill: {
          flex: 1,
        },
        touchablePosition: {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
        },
      }),
    [black, white, invisible]
  );
};

export default useStyles;
