import React from 'react';
import { View } from 'react-native';

import { IKeyResult } from 'src/common/types';
import { Text } from 'src/components';
import styles from './styles';

const KeyResult: React.FC<IKeyResult> = ({ name, points }) => {
  return (
    <View style={styles.keyResult}>
      <Text>{name}</Text>
      <Text>{points}/100</Text>
    </View>
  );
};

export default KeyResult;
