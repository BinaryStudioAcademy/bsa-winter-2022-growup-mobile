import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';

import { HeadingLevel, OnboardingRoute } from 'src/common/enums';
import { Heading } from 'src/components';
import { AddButton } from '..';
import styles from './styles';

type IEducationContentScreenProps = Record<string, never>;

const EducationContent: React.FC<IEducationContentScreenProps> = () => {
  const navigation = useNavigation();

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
