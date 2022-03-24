import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const shadow = useColor('SHADOW');

  return useMemo(
    () =>
      StyleSheet.create({
        card: {
          borderWidth: 1,
          borderColor: shadow,
          borderRadius: 10,
        },
        cardContent: {
          marginHorizontal: 15,
          marginBottom: 10,
        },
        cardTitle: {
          marginVertical: 10,
        },
        cardActions: {
          borderTopWidth: 1,
          borderTopColor: shadow,
          paddingHorizontal: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
        },
        actionButtons: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        editIcon: {
          marginLeft: 20,
        },
        key: {
          marginRight: 5,
        },
        date: {
          marginLeft: 5,
        },
        text: {
          flexDirection: 'row',
          marginBottom: 10,
        },
      }),
    [shadow]
  );
};

export default useStyles;
