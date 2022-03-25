import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { Heading, MainButton, FormGoogleLocationSelect } from 'src/components';
import { addLocationValidationSchema } from 'src/validation-schemas';
import { useAppNavigation } from 'src/hooks';
import { defaultAddLocationPayload } from './common';
import useStyles from './styles';

const AddLocationScreen: React.FC = () => {
  const styles = useStyles();

  const navigation = useAppNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Formik
        initialValues={defaultAddLocationPayload}
        validationSchema={addLocationValidationSchema}
        onSubmit={() => {
          // TODO
        }}
      >
        {({ isValid, handleSubmit }) => (
          <>
            <View style={styles.inputContent}>
              <Heading style={styles.heading} level={HeadingLevel.H5}>
                Location
              </Heading>
              <FormGoogleLocationSelect
                name="location"
                placeholder="Location"
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
    </SafeAreaView>
  );
};

export default AddLocationScreen;
