import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';

import { HeadingLevel, OnboardingRoute } from 'src/common/enums';
import { IEducation } from 'src/common/types';
import { Heading, AddButton, EducationCard } from 'src/components';
import { useAppDispatch, useAppNavigation, useAppSelector } from 'src/hooks';
import { educationActions } from 'src/store/education';
import useStyles from './styles';

const EducationContent: React.FC = () => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const { education } = useAppSelector(state => state.education);

  const handleAddEducation = () => {
    navigation.navigate(OnboardingRoute.ADD_EDUCATION, {
      _education: undefined,
    });
  };

  const handleDeleteEducation = useCallback(
    (id: string) => {
      dispatch(educationActions.deleteEducationExperience(id));
    },
    [dispatch]
  );

  const handleEditEducation = useCallback(
    (_education: IEducation) => {
      navigation.navigate(OnboardingRoute.ADD_EDUCATION, {
        _education,
      });
    },
    [navigation]
  );

  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H4}>
        What Is Your Education?
      </Heading>
      <View style={styles.buttonContainer}>
        <AddButton onPress={handleAddEducation}>Add Education</AddButton>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {education.map(educ => (
          <EducationCard
            style={styles.cardItem}
            key={educ.id}
            education={educ}
            onEdit={handleEditEducation}
            onDelete={handleDeleteEducation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default EducationContent;
