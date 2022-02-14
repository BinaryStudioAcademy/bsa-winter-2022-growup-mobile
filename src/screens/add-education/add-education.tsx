import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { en, registerTranslation } from 'react-native-paper-dates';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { DateInput, Heading, Input, MainButton } from 'src/components';
import styles from './styles';

type AddEducationScreenProps = Record<string, never>;

type Period = {
  startDate: Date | undefined;
  endDate: Date | undefined;
};

registerTranslation('en', en);

const AddEducationScreen: React.FC<AddEducationScreenProps> = () => {
  const navigation = useNavigation();
  const [period, setPeriod] = useState<Period>({
    startDate: undefined,
    endDate: undefined,
  });

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <View style={styles.screen}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              University
            </Heading>
            <Input placeholder="University Name" />
          </View>
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Course
            </Heading>
            <Input placeholder="Course Name" />
          </View>
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Degree
            </Heading>
            <Input placeholder="Degree" />
          </View>
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Period
            </Heading>
            <DateInput
              label="Start Date"
              onChange={date => setPeriod(curr => ({ ...curr, endDate: date }))}
              value={period.startDate}
              locale="en"
              inputMode="start"
            />
            <DateInput
              onChange={date =>
                setPeriod(curr => ({ ...curr, startDate: date }))
              }
              value={period.endDate}
              locale="en"
              inputMode="start"
              label="End Date"
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
          <MainButton mode={ButtonMode.CONTAINED}>Add</MainButton>
        </View>
      </ScrollView>
    </View>
  );
};

export default AddEducationScreen;
