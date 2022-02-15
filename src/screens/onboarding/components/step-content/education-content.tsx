import React, { useCallback } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { HeadingLevel, OnboardingRoute } from 'src/common/enums';
import { OnboardingStackParamList } from 'src/common/types';
import { Heading } from 'src/components';
import { AddButton } from '..';
import styles from './styles';

type EducationContentScreenProps = NativeStackNavigationProp<
  OnboardingStackParamList,
  OnboardingRoute.ADD_EXPERIENCE
>;

const EducationContent: React.FC = () => {
  const navigation = useNavigation<EducationContentScreenProps>();

  const handleAddEducation = useCallback(() => {
    navigation.navigate(OnboardingRoute.ADD_EDUCATION);
  }, [navigation]);

  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H4}>
        What Is Your Education?
      </Heading>
      <View style={styles.buttonContainer}>
        <AddButton onPress={handleAddEducation}>Add Education</AddButton>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TODO map education card */}
      </ScrollView>
    </View>
  );
};

export default EducationContent;
