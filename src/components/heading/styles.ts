import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { HeadingLevel } from 'src/common/enums';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        [HeadingLevel.H4]: {
          fontSize: 24,
          fontFamily: 'NunitoSans-Bold',
        },
        [HeadingLevel.H5]: {
          fontSize: 18,
          fontFamily: 'NunitoSans-Bold',
        },
        [HeadingLevel.H6]: {
          fontSize: 16,
          fontFamily: 'NunitoSans-Bold',
        },
      }),
    []
  );
};

export default useStyles;
