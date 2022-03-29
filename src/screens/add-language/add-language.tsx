import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { FormInput, Heading, MainButton } from 'src/components';
import { addLanguageValidationSchema } from 'src/validation-schemas';
import { useAppNavigation } from 'src/hooks';
import { defaultAddLanguagePayload } from './common';
import useStyles from './styles';

const AddLanguageScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={defaultAddLanguagePayload}
          validationSchema={addLanguageValidationSchema}
          onSubmit={() => {
            // TODO
          }}
        >
          {({ isValid, handleSubmit }) => (
            <>
              <View>
                <View style={styles.inputContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Language
                  </Heading>
                  <FormInput name="language" placeholder="Language" />
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
