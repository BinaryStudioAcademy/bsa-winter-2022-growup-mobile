import React, { useMemo } from 'react';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel, ProfileRoute } from 'src/common/enums';
import { FormDate, FormInput, Heading, MainButton } from 'src/components';
import { addExperienceValidationSchema } from 'src/validation-schemas';
import { actions as experienceActions } from 'src/store/experience';
import { useAppDispatch, useAppNavigation } from 'src/hooks';
import { IAddCareerPayload, ProfileStackParamList } from 'src/common/types';
import { defaultAddExperiencePayload } from './common';
import styles from './styles';

type AddExperienceRouteProps = RouteProp<
  ProfileStackParamList,
  ProfileRoute.ADD_CAREER_EXPERIENCE
>;

const AddExperienceScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const route = useRoute<AddExperienceRouteProps>();
  const dispatch = useAppDispatch();
  const { isEdit, career } = route.params;

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleAddExperience = (values: IAddCareerPayload) => {
    const commonPayload = {
      position: values.position,
      company: values.company,
      startDate: values.startDate,
      endDate: values.endDate,
    };

    if (isEdit && career) {
      dispatch(
        experienceActions.editCareerExperience({
          id: career.id,
          ...commonPayload,
        })
      );
    } else {
      dispatch(experienceActions.addCareerExperience(commonPayload));
    }

    navigation.goBack();
  };

  const initialValues: IAddCareerPayload = useMemo(() => {
    if (isEdit && career) {
      return {
        company: career.company,
        position: career.position,
        startDate: career.startDate,
        endDate: career.endDate,
      };
    } else {
      return defaultAddExperiencePayload;
    }
  }, [isEdit, career]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          validationSchema={addExperienceValidationSchema}
          initialValues={initialValues}
          onSubmit={handleAddExperience}
        >
          {({ isValid, handleSubmit }) => (
            <>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Company
                </Heading>
                <FormInput placeholder="Company Name" name="company" />
              </View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Position
                </Heading>
                <FormInput placeholder="Position Name" name="position" />
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
                  disabled={!isValid}
                  onPress={handleSubmit}
                  mode={ButtonMode.CONTAINED}
                >
                  {isEdit ? 'Edit' : 'Add'}
                </MainButton>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddExperienceScreen;
