import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { FormDate, FormInput, Heading, MainButton } from 'src/components';
import styles from './styles';
import { educationValidationSchema } from 'src/validation-schemas';

const initialValues = {
  universityName: '',
  courseName: '',
  degree: '',
  startDate: undefined,
  endDate: undefined,
};

const AddEducationScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          validationSchema={educationValidationSchema}
          initialValues={initialValues}
          onSubmit={() => {
            // TODO
          }}
        >
          <>
            <View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  University
                </Heading>
                <FormInput
                  placeholder="University Name"
                  name="universityName"
                />
              </View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Course
                </Heading>
                <FormInput placeholder="Course Name" name="courseName" />
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
                  locale="en"
                  inputMode="start"
                  name="startDate"
                />
                <FormDate
                  style={styles.dateInput}
                  locale="en"
                  inputMode="start"
                  label="End Date"
                  name="endDate"
                />
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <MainButton
                style={styles.button}
                onPress={handleCancel}
                mode={ButtonMode.OUTLINED}
              >
                Cancel
              </MainButton>
              <MainButton mode={ButtonMode.CONTAINED}>Add</MainButton>
            </View>
          </>
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEducationScreen;
