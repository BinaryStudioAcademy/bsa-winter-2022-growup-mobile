import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { TextAppearance } from 'src/common/enums';
import { useColor } from 'src/hooks';

const useStyles = () => {
  const hint = useColor('HINT');
  const black = useColor('BLACK');

  return useMemo(
    () =>
      StyleSheet.create({
        [TextAppearance.HINT]: {
          color: hint,
        },
        [TextAppearance.BODY]: {
          color: black,
        },
      }),
    [hint, black]
  );
};

export default useStyles;
