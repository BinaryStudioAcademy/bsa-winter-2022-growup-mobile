import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { FormInput, Heading, MainButton } from 'src/components';
import { locationValidationSchema } from 'src/validation-schemas';
import styles from './styles';

const initialValues = {
  location: '',
};

const AddLocationScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <Formik
        initialValues={initialValues}
        validationSchema={locationValidationSchema}
        onSubmit={() => {
          // TODO
        }}
      >
        <>
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Location
            </Heading>
            <FormInput name="location" placeholder="Location" />
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
    </SafeAreaView>
  );
};

export default AddLocationScreen;
