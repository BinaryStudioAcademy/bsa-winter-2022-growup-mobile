import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';

import { HeadingLevel, OnboardingRoute } from 'src/common/enums';
import { ICareer } from 'src/common/types';
import { Heading, AddButton, CareerCard } from 'src/components';
import { useAppDispatch, useAppNavigation, useAppSelector } from 'src/hooks';
import { experienceActions } from 'src/store/experience';
import useStyles from './styles';

const ExperienceContent: React.FC = () => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const { careerExperience } = useAppSelector(state => state.experience);

  const handleAddExperience = () => {
    navigation.navigate(OnboardingRoute.ADD_EXPERIENCE, {
      isEdit: false,
    });
  };

  const handleDeleteExperience = useCallback(
    (id: string) => {
      dispatch(experienceActions.deleteCareerExperience(id));
    },
    [dispatch]
  );

  const handleEditExperience = useCallback(
    (career: ICareer) => {
      navigation.navigate(OnboardingRoute.ADD_EXPERIENCE, {
        isEdit: true,
        career,
      });
    },
    [navigation]
  );

  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H4}>
        What Is Your Experience?
      </Heading>
      <View style={styles.buttonContainer}>
        <AddButton onPress={handleAddExperience}>Add Experience</AddButton>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {careerExperience.map(career => (
          <View style={styles.cardItem} key={career.id}>
            <CareerCard
              item={career}
              onEdit={handleEditExperience}
              onDelete={handleDeleteExperience}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ExperienceContent;
