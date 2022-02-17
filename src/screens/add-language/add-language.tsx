import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { FormInput, Heading, MainButton } from 'src/components';
import { addLanguageValidationSchema } from 'src/validation-schemas';
import { defaultAddLanguagePayload } from './common';
import styles from './styles';

const AddLanguageScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Formik
        initialValues={defaultAddLanguagePayload}
        validationSchema={addLanguageValidationSchema}
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
