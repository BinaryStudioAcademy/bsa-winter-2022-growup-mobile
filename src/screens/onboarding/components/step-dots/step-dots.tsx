import React from 'react';
import { View } from 'react-native';

import styles from './styles';

type StepDotsProps = {
  activeDot: number;
};

const StepDots: React.FC<StepDotsProps> = ({ activeDot }) => {
  return (
    <View style={styles.dotsContainer}>
      <View style={[styles.dot, activeDot === 0 && styles.activeDot]} />
      <View style={[styles.dot, activeDot === 1 && styles.activeDot]} />
      <View style={[styles.dot, activeDot === 2 && styles.activeDot]} />
      <View style={[styles.dot, activeDot === 3 && styles.activeDot]} />
    </View>
  );
};

export default StepDots;
