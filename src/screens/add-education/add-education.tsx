import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { IAddEducationPayload } from 'src/common/types';
import { FormDate, FormInput, Heading, MainButton } from 'src/components';
import { addEducationValidationSchema } from 'src/validation-schemas';
import { useAppNavigation, useAppDispatch } from 'src/hooks';
import { actions as educationActions } from 'src/store/education';
import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { defaultAddEducationPayload } from './common';
import styles from './styles';

const AddEducationScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleAddEducation = (values: IAddEducationPayload) => {
    dispatch(
      educationActions.addEducation({
        university: values.university,
        specialization: values.specialization,
        degree: values.degree,
        startDate: values.startDate,
        endDate: values.endDate,
      })
    );
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          validationSchema={addEducationValidationSchema}
          initialValues={defaultAddEducationPayload}
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

export default AddEducationScreen;
