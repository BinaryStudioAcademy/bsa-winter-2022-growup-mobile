import React from 'react';
import { ScrollView, View } from 'react-native';

import { HeadingLevel, OnboardingRoute } from 'src/common/enums';
import { Heading, AddButton } from 'src/components';
import { useAppNavigation } from 'src/hooks';
import styles from './styles';

const EducationContent: React.FC = () => {
  const navigation = useAppNavigation();

  const handleAddEducation = () => {
    navigation.navigate(OnboardingRoute.ADD_EDUCATION);
  };

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
