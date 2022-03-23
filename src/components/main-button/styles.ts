import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { ButtonMode } from 'src/common/enums';
import { useColor } from 'src/hooks';

const useStyles = () => {
  const accent = useColor('ACCENT');

  return useMemo(
    () =>
      StyleSheet.create({
        [ButtonMode.OUTLINED]: {
          borderWidth: 2,
          borderColor: accent,
        },
        text: {
          fontFamily: 'NunitoSans-Bold',
          fontSize: 16,
        },
      }),
    [accent]
  );
};

export default useStyles;
