import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { FormDate, FormInput, Heading, MainButton } from 'src/components';
import { experienceValidationSchema } from 'src/validation-schemas';
import styles from './styles';

const initialValues = {
  companyName: '',
  position: '',
  startDate: undefined,
  endDate: undefined,
};

const AddExperienceScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          validationSchema={experienceValidationSchema}
          initialValues={initialValues}
          onSubmit={() => {
            // TODO
          }}
        >
          {({ isValid, handleSubmit }) => (
            <>
              <View>
                <View style={styles.inputContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Company
                  </Heading>
                  <FormInput placeholder="Company Name" name="companyName" />
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
