import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { FormDate, FormInput, Heading, MainButton } from 'src/components';
import { addExperienceValidationSchema } from 'src/validation-schemas';
import { actions as experienceActions } from 'src/store/experience';
import { IAddCareerPayload } from 'src/common/types';
import { useAppDispatch, useAppNavigation } from 'src/hooks';
import { defaultAddExperiencePayload } from './common';
import styles from './styles';

const AddExperienceScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleAddExperience = (values: IAddCareerPayload) => {
    dispatch(
      experienceActions.addCareerExperience({
        position: values.position,
        company: values.company,
        startDate: values.startDate,
        endDate: values.endDate,
      })
    );

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          validationSchema={addExperienceValidationSchema}
          initialValues={defaultAddExperiencePayload}
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
                  Add
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
