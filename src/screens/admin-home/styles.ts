import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useColor } from 'src/hooks';

const useStyles = () => {
  const white = useColor('WHITE');
  const grey = useColor('GREY');

  return useMemo(
    () =>
      StyleSheet.create({
        screen: {
          flex: 1,
          backgroundColor: white,
        },
        headerContent: {
          backgroundColor: grey,
        },
      }),
    [white, grey]
  );
};

export default useStyles;
