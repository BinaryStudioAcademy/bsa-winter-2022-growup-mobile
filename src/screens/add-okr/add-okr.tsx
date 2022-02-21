import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import {
  Heading,
  MainButton,
  FormInput,
  FormSelect,
  Text,
  AddButton,
} from 'src/components';
import { addLocationValidationSchema } from 'src/validation-schemas';
import { defaultAddOKRPayload } from './common';
import { IKeyResult } from 'src/common/types';
import styles from './styles';

const teamNames = [
  {
    label: 'Team 1',
    value: 'team1',
  },
  {
    label: 'Team 2',
    value: 'team2',
  },
  {
    label: 'Team 3',
    value: 'team3',
  },
];

const parentObj = [
  {
    label: 'Objective 1',
    value: 'objective1',
  },
  {
    label: 'Objective 2',
    value: 'objective2',
  },
  {
    label: 'Objective 3',
    value: 'objective3',
  },
];

const objectiveCycle = [
  {
    label: 'ObjectiveCycle 1',
    value: 'objectiveCycle1',
  },
  {
    label: 'ObjectiveCycle 2',
    value: 'objectiveCycle2',
  },
  {
    label: 'ObjectiveCycle 3',
    value: 'objectiveCycle3',
  },
];

const AddOKRScreen: React.FC = () => {
  const [keyResults] = useState<IKeyResult[]>([]);

  const navigation = useNavigation();
  // const route = useRoute();

  // const { isTeamOKR } = route.params;

  const isTeamOKR = false;

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Formik
          initialValues={defaultAddOKRPayload}
          validationSchema={addLocationValidationSchema}
          onSubmit={() => {
            // TODO
          }}
        >
          {({ isValid, handleSubmit }) => (
            <>
              <View>
                <View style={styles.inputContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Inspirational Objective
                  </Heading>
                  <FormInput
                    name="inspirationalObjective"
                    placeholder="E. g., Achieve record revenue and profitability"
                  />
                </View>
                <View style={styles.inputContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Objective Cycle
                  </Heading>
                  <FormSelect
                    name="objectiveCycle"
                    placeholder="Select Objective cycle"
                    list={objectiveCycle}
                  />
                </View>
                <View style={styles.inputContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Parent Objective
                  </Heading>
                  <FormSelect
                    name="parentObjective"
                    placeholder="Select Parent Objective"
                    list={parentObj}
                  />
                </View>
                {isTeamOKR && (
                  <View style={styles.inputContent}>
                    <Heading style={styles.heading} level={HeadingLevel.H5}>
                      Team Name
                    </Heading>
                    <FormSelect
                      name="teamName"
                      placeholder="Select Team Name"
                      list={teamNames}
                    />
                  </View>
                )}
                <View style={styles.keyResultContent}>
                  <Heading style={styles.heading} level={HeadingLevel.H5}>
                    Key Results
                  </Heading>
                  <AddButton labelStyle={styles.button}>
                    Add Key Result
                  </AddButton>
                  {keyResults.map(item => (
                    <View style={styles.keyResult} key={item.name}>
                      <Text>{item.name}</Text>
                      <Text>{item.level}/100</Text>
                    </View>
                  ))}
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
                  Create Objective
                </MainButton>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddOKRScreen;
