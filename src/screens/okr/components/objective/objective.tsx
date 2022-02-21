import React from 'react';
import { View } from 'react-native';

import { IObjective } from 'src/common/types';
import { Text } from 'src/components';
import styles from './styles';

type ObjectiveProps = {
  objective: IObjective;
};

const Objective: React.FC<ObjectiveProps> = ({
  objective: { name, points, maxPoints },
}) => {
  return (
    <View style={styles.objective}>
      <Text>{name}</Text>
      <Text>
        {points}/{maxPoints}
      </Text>
    </View>
  );
};

export default Objective;
