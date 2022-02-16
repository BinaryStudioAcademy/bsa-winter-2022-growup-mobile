import React from 'react';
import { View } from 'react-native';

import styles from './styles';

interface IStepDotsProps {
  activeIndex: number;
  count: number;
}

const StepDots: React.FC<IStepDotsProps> = ({ activeIndex, count }) => {
  const getActiveStyle = (dotIndex: number) => {
    if (activeIndex === dotIndex) {
      return styles.activeDot;
    }

    return {};
  };

  return (
    <View style={styles.dotsContainer}>
      {[...Array(count)].map((_, index) => (
        <View key={index} style={[styles.dot, getActiveStyle(index)]} />
      ))}
    </View>
  );
};

export default StepDots;
