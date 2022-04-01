import React from 'react';
import { View } from 'react-native';

import { IKeyResult } from 'src/common/types';
import { Text } from 'src/components';
import useStyles from './styles';

type KeyResultProps = {
  keyResult: IKeyResult;
};

const KeyResult: React.FC<KeyResultProps> = ({
  keyResult: { name, points },
}) => {
  const styles = useStyles();

  return (
    <View style={styles.keyResult}>
      <Text>{name}</Text>
      <Text>{points}/100</Text>
    </View>
  );
};

export default KeyResult;
