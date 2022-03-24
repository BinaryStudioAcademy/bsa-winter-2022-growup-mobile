import React from 'react';
import { View } from 'react-native';
import { Switch as SwitchUI } from 'react-native-paper';

import { Text } from '..';
import useStyles from './styles';

type SwitchProps = React.ComponentPropsWithoutRef<typeof SwitchUI> & {
  label?: string;
};

const Switch: React.FC<SwitchProps> = ({ label, ...switchProps }) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <Text>
        <SwitchUI {...switchProps} />
      </Text>
    </View>
  );
};

export default Switch;
