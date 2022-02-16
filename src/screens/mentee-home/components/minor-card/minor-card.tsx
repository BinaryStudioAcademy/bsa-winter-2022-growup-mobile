import React from 'react';
import { View } from 'react-native';
import styles from './styles';

const MinorCard: React.FC = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default MinorCard;
