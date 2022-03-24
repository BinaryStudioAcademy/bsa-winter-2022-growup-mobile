import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
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
      }),
    []
  );
};

export default useStyles;
