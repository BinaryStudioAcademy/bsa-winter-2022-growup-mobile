import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { AppColorLight, ButtonMode } from 'src/common/enums';
import { useColor } from 'src/hooks';

const useStyles = () => {
  const forceWhite = AppColorLight.WHITE;
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
        disabled: {
          color: forceWhite,
        },
      }),
    [forceWhite, accent]
  );
};

export default useStyles;
