import React from 'react';
import { View } from 'react-native';

import { IObjective } from 'src/common/types';
import { Text } from 'src/components';
import useStyles from './styles';

type KeyResultProps = {
  keyResult: IObjective;
};

const Objective: React.FC<KeyResultProps> = ({
  keyResult: { name, result },
}) => {
  const styles = useStyles();

  return (
    <View style={styles.keyResult}>
      <Text>{name}</Text>
      <Text>{result}/100</Text>
    </View>
  );
};

export default Objective;
