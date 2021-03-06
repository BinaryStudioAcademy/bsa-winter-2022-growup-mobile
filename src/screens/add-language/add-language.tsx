import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { FormInput, Heading, MainButton } from 'src/components';
import { addLanguageValidationSchema } from 'src/validation-schemas';
import { languageActions } from 'src/store/language';
import { IAddLanguagePayload } from 'src/common/types';
import { useAppDispatch, useAppNavigation } from 'src/hooks';
import { defaultAddLanguagePayload } from './common';
import useStyles from './styles';

const AddLanguageScreen: React.FC = () => {
  const styles = useStyles();
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleAddLanguage = (values: IAddLanguagePayload) => {
    dispatch(languageActions.addLanguage([values]));
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={defaultAddLanguagePayload}
          validationSchema={addLanguageValidationSchema}
          onSubmit={handleAddLanguage}
        >
          {({ isValid, handleSubmit }) => (
            <>
              <View>
                <View style={styles.inputContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Language
                  </Heading>
                  <FormInput name="name" placeholder="Language" />
                </View>
                <View style={styles.inputContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Level
                  </Heading>
                  <FormInput name="level" placeholder="Level" />
                </View>
                <View style={styles.inputContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Certificate
                  </Heading>
                  <FormInput
                    name="certificate"
                    placeholder="Certificate name"
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

export default AddLanguageScreen;
