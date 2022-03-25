import { useMemo } from 'react';
import { StyleSheet } from 'react-native';

import { useColor } from 'src/hooks';

const useStyles = () => {
  const secondLevel = useColor('SECOND_LEVEL');

  return useMemo(
    () =>
      StyleSheet.create({
        container: {
          alignItems: 'center',
          flex: 1,
        },
        avatar: {
          alignSelf: 'center',
          marginBottom: 15,
        },
        name: {
          marginBottom: 8,
        },
        role: {
          fontSize: 16,
          marginBottom: 8,
        },
        levelWrapper: {
          flexDirection: 'row',
          alignItems: 'center',
        },
        levelText: {
          marginLeft: 5,
          color: secondLevel,
        },
      }),
    [secondLevel]
  );
};

export default useStyles;
