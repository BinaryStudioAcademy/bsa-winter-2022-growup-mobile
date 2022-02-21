import React, { useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { AppColor, ButtonMode, HeadingLevel, OKRRoute } from 'src/common/enums';
import { FormInput, Heading, MainButton, Text } from 'src/components';
import { addKeyResultValidationSchema } from 'src/validation-schemas';
import { defaultAddLanguagePayload } from './common';
import Slider from '@react-native-community/slider';
import { OKRStackParamList } from 'src/common/types';
import styles from './styles';

type ProfileScreenRouteProp = RouteProp<
  OKRStackParamList,
  OKRRoute.ADD_KEY_RESULT
>;

const AddKeyResultScreen: React.FC = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const route = useRoute<ProfileScreenRouteProp>();
  const navigation = useNavigation();

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <Formik
        initialValues={defaultAddLanguagePayload}
        validationSchema={addKeyResultValidationSchema}
        onSubmit={payload => {
          route.params.onAddKeyResult({
            name: payload.name,
            points: currentLevel,
          });
          navigation.goBack();
        }}
      >
        {({ isValid, handleSubmit }) => (
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
                  <Text>{currentLevel}</Text>
                  <Text>100</Text>
                </View>
                <Slider
                  onValueChange={setCurrentLevel}
                  value={currentLevel}
                  minimumValue={0}
                  step={1}
                  maximumValue={100}
                  minimumTrackTintColor={AppColor.PRIMARY}
                  maximumTrackTintColor={AppColor.PRIMARY}
                  thumbTintColor={AppColor.PRIMARY}
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
