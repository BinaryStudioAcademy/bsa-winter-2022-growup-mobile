import React from 'react';
import { ScrollView, View } from 'react-native';

import CareerCard from './career-card';
import { ICareer } from './career.interface';
import styles from './styles';

type CareerLayoutProps = {
  items: ICareer[];
};

const CareerLayout: React.FC<CareerLayoutProps> = ({ items }) => (
  <ScrollView contentContainerStyle={styles.careerWrapper}>
    <View style={styles.divider} />
    <View style={styles.cards}>
      {items.map((item, index) => (
        <CareerCard key={index} item={item} />
      ))}
    </View>
  </ScrollView>
);

export default CareerLayout;
