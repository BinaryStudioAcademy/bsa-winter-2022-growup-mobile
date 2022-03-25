import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const textGray = useColor('TEXT_GRAY');

  return useMemo(
    () =>
      StyleSheet.create({
        tagsContent: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
        },
        tag: {
          margin: 3,
        },
        heading: {
          marginBottom: 10,
          marginLeft: 5,
          fontWeight: '700',
        },
        hintHeader: {
          fontSize: 12,
          color: textGray,
        },
      }),
    [textGray]
  );
};

export default useStyles;
