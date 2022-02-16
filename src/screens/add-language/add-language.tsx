import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { FormInput, Heading, MainButton } from 'src/components';
import { languageValidationSchema } from 'src/validation-schemas';
import styles from './styles';

const initialValues = {
  language: '',
};

const AddLanguageScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView style={styles.screen}>
      <Formik
        initialValues={initialValues}
        validationSchema={languageValidationSchema}
        onSubmit={() => {
          // TODO
        }}
      >
        {({ isValid, handleSubmit }) => (
          <>
            <View style={styles.inputContent}>
              <Heading style={styles.heading} level={HeadingLevel.H5}>
                Language
              </Heading>
              <FormInput name="language" placeholder="Language" />
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
    </SafeAreaView>
  );
};

export default AddLanguageScreen;
