import React from 'react';
import { ScrollView, View } from 'react-native';

import { HeadingLevel, OnboardingRoute } from 'src/common/enums';
import { Heading, AddButton } from 'src/components';
import { useAppNavigation } from 'src/hooks';
import useStyles from './styles';

const ExperienceContent: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();

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
