import React, { useMemo } from 'react';

import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp, useRoute } from '@react-navigation/native';
import { Formik } from 'formik';

import { IEducation } from 'src/common/types';
import { ProfileStackParamList } from 'src/common/types';
import { FormDate, FormInput, Heading, MainButton } from 'src/components';
import { addEducationValidationSchema } from 'src/validation-schemas';
import { useAppNavigation, useAppDispatch } from 'src/hooks';
import { educationActions } from 'src/store/education';
import { ButtonMode, HeadingLevel, ProfileRoute } from 'src/common/enums';
import { defaultAddEducationPayload } from './common';
import useStyles from './styles';

type AddEducationRouteProps = RouteProp<
  ProfileStackParamList,
  ProfileRoute.ADD_EDUCATION
>;

const AddEducationScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();
  const navigation = useAppNavigation();
  const {
    params: { education },
  } = useRoute<AddEducationRouteProps>();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleAddEducation = (values: IEducation) => {
    const commonPayload = {
      university: values.university,
      specialization: values.specialization,
      degree: values.degree,
      startDate: values.startDate,
      endDate: values.endDate,
    };
    if (education) {
      dispatch(
        educationActions.editEducationExperience({
          id: education.id,
          ...commonPayload,
        })
      );
    } else {
      dispatch(educationActions.addEducationExperience(commonPayload));
    }
    navigation.goBack();
  };

  const initialValues: IEducation = useMemo(() => {
    if (education) {
      return {
        id: education.id,
        university: education.university,
        specialization: education.specialization,
        degree: education.degree,
        startDate: education.startDate,
        endDate: education.endDate ? education.endDate : undefined,
      };
    }
    return defaultAddEducationPayload;
  }, [education]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          validationSchema={addEducationValidationSchema}
          initialValues={initialValues}
          onSubmit={handleAddEducation}
        >
          {({ isValid, handleSubmit }) => (
            <>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  University
                </Heading>
                <FormInput placeholder="University Name" name="university" />
              </View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Specialization
                </Heading>
                <FormInput placeholder="Specialization" name="specialization" />
              </View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Degree
                </Heading>
                <FormInput placeholder="Degree" name="degree" />
              </View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Period
                </Heading>
                <FormDate
                  label="Start Date"
                  inputMode="start"
                  name="startDate"
                />
                <FormDate
                  style={styles.dateInput}
                  inputMode="start"
                  label="End Date"
                  name="endDate"
                />
              </View>
              <View style={styles.buttonContainer}>
                <MainButton
                  style={styles.button}
                  onPress={handleCancel}
                  mode={ButtonMode.OUTLINED}
                >
                  Cancel
                </MainButton>
                <MainButton
                  onPress={handleSubmit}
                  disabled={!isValid}
                  mode={ButtonMode.CONTAINED}
                >
                  {education ? 'Save' : 'Add'}
                </MainButton>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEducationScreen;
