import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';

import { HeadingLevel, OnboardingRoute } from 'src/common/enums';
import { OnboardingStackParamList } from 'src/common/types';
import { Heading } from 'src/components';
import { AddButton } from '../';
import styles from './styles';

type ExperienceContentScreenProps = NativeStackNavigationProp<
  OnboardingStackParamList,
  OnboardingRoute.ADD_EXPERIENCE
>;

const ExperienceContent: React.FC = () => {
  const navigation = useNavigation<ExperienceContentScreenProps>();

  const handleAddExperience = useCallback(() => {
    navigation.navigate(OnboardingRoute.ADD_EXPERIENCE);
  }, [navigation]);

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
