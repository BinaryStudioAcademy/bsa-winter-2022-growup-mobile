import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';

interface IStepDotsProps {
  activeIndex: number;
  count: number;
}

const StepDots: React.FC<IStepDotsProps> = ({ activeIndex, count }) => {
  const styles = useStyles();

  return (
    <View style={styles.dotsContainer}>
      {[...Array(count)].map((_, index) => {
        const isActive = activeIndex === index;
        return (
          <View
            key={index}
            style={[styles.dot, isActive && styles.activeDot]}
          />
        );
      })}
    </View>
  );
};

export default StepDots;
