import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';

const MinorCard: React.FC = ({ children }) => {
  const styles = useStyles();
  return <View style={styles.card}>{children}</View>;
};

export default MinorCard;
