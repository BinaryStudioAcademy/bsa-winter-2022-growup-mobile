import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

const useStyles = () => {
  return useMemo(
    () =>
      StyleSheet.create({
        infoRow: {
          flexDirection: 'row',
          marginBottom: 5,
          alignItems: 'center',
        },
        heading: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        },
        text: {
          marginLeft: 5,
        },
        tagsContainer: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          marginVertical: 5,
        },
        tag: {
          margin: 2,
        },
        button: {
          alignSelf: 'flex-end',
        },
      }),
    []
  );
};

export default useStyles;
