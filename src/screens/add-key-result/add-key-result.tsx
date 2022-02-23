import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import {
  FormInput,
  FormSlider,
  Heading,
  MainButton,
  Text,
} from 'src/components';
import { addKeyResultValidationSchema } from 'src/validation-schemas';
import { useAppDispatch, useAppNavigation } from 'src/hooks';
import { okrActions } from 'src/store/okr';
import { IKeyResult } from 'src/common/types';
import { defaultAddKeyResultPayload } from './common';
import styles from './styles';

const AddKeyResultScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleAddKeyResult = (payload: IKeyResult) => {
    dispatch(
      okrActions.addKeyResult({
        name: payload.name,
        points: payload.points,
      })
    );
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Formik
        initialValues={defaultAddKeyResultPayload}
        validationSchema={addKeyResultValidationSchema}
        onSubmit={handleAddKeyResult}
      >
        {({ isValid, values, handleSubmit }) => (
          <>
            <View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Key Result
                </Heading>
                <FormInput
                  name="name"
                  placeholder="E. g., accomplish JS course"
                />
              </View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Current Level
                </Heading>
                <View style={styles.levelValues}>
                  <Text>{values.points}</Text>
                  <Text>100</Text>
                </View>
                <FormSlider
                  name="points"
                  minimumValue={0}
                  step={1}
                  maximumValue={100}
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
                Add Key Result
              </MainButton>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default AddKeyResultScreen;
