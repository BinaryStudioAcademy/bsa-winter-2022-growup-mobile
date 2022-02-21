import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Formik } from 'formik';

import { ButtonMode, HeadingLevel, OKRRoute } from 'src/common/enums';
import {
  Heading,
  MainButton,
  FormInput,
  FormSelect,
  Text,
  AddButton,
} from 'src/components';
import {
  createOKRValidationSchema,
  createTeamOKRValidationSchema,
} from 'src/validation-schemas';
import { defaultAddOKRPayload } from './common';
import { OKRStackParamList } from 'src/common/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './styles';
import { useAppDispatch, useAppSelector } from 'src/hooks';
import { okrActions } from 'src/store/okr';
import { IAddOkr } from 'src/common/types/okr/add-okr.interface';

const MOCK_TEAM_NAMES = [
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

const MOCK_PARENT_OBJ = [
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

const MOCK_OBJ_CYCLE = [
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

type AddOKRScreenProps = NativeStackNavigationProp<
  OKRStackParamList,
  OKRRoute.ADD_KEY_RESULT
>;

const AddOKRScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentKeyResults } = useAppSelector(state => state.okr);

  const navigation = useNavigation<AddOKRScreenProps>();
  // const route = useRoute();

  // const { isTeamOKR } = route.params;

  const isTeamOKR = false;

  const handleCancel = () => {
    navigation.goBack();
  };

  const handleAddKeyResult = () => {
    navigation.navigate(OKRRoute.ADD_KEY_RESULT);
  };

  const handleCreateOKR = (payload: IAddOkr) => {
    dispatch(
      okrActions.createOKR({
        name: payload.name,
        parent: payload.parent,
        cycle: payload.cycle,
        keyResults: currentKeyResults,
        teamName: payload.teamName,
      })
    );
  };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={defaultAddOKRPayload}
          validationSchema={
            isTeamOKR
              ? createTeamOKRValidationSchema
              : createOKRValidationSchema
          }
          onSubmit={values => {
            handleCreateOKR(values);
          }}
        >
          {({ isValid, handleSubmit }) => (
            <>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Inspirational Objective
                </Heading>
                <FormInput
                  name="name"
                  placeholder="E. g., Achieve record revenue and profitability"
                />
              </View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Objective Cycle
                </Heading>
                <FormSelect
                  name="cycle"
                  placeholder="Select Objective cycle"
                  list={MOCK_OBJ_CYCLE}
                />
              </View>
              <View style={styles.inputContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Parent Objective
                </Heading>
                <FormSelect
                  name="parent"
                  placeholder="Select Parent Objective"
                  list={MOCK_PARENT_OBJ}
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
                    list={MOCK_TEAM_NAMES}
                  />
                </View>
              )}
              <View style={styles.keyResultContent}>
                <Heading style={styles.heading} level={HeadingLevel.H5}>
                  Key Results
                </Heading>
                <AddButton
                  onPress={handleAddKeyResult}
                  labelStyle={styles.button}
                >
                  Add Key Result
                </AddButton>
                {currentKeyResults.length === 0 && (
                  <Text style={styles.error}>
                    At least one key result must be added
                  </Text>
                )}
                {currentKeyResults.map(item => (
                  <View style={styles.keyResult} key={item.name}>
                    <Text>{item.name}</Text>
                    <Text>{item.points}/100</Text>
                  </View>
                ))}
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
                  disabled={!isValid || currentKeyResults.length === 0}
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
