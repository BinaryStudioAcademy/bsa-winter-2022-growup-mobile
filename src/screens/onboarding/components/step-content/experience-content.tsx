import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { HeadingLevel, OnboardingRoute } from 'src/common/enums';
import { OnboardingStackParamList } from 'src/common/types';
import { Heading } from 'src/components';
import { AddButton } from '../';
import styles from './styles';

type ExperienceContentProps = NativeStackNavigationProp<
  OnboardingStackParamList,
  OnboardingRoute.ADD_EXPERIENCE
>;

const ExperienceContent: React.FC = () => {
  const navigation = useNavigation<ExperienceContentProps>();

  const handleAddExperience = () => {
    navigation.navigate(OnboardingRoute.ADD_EXPERIENCE);
  };

  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H4}>
        What Is Your Experience?
      </Heading>
      <View style={styles.buttonContainer}>
        <AddButton onPress={handleAddExperience}>Add Experience</AddButton>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TODO map experience card */}
      </ScrollView>
    </View>
  );
};

export default ExperienceContent;
