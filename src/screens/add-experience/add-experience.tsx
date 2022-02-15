import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { DateInput, Heading, Input, MainButton } from 'src/components';
import styles from './styles';

type Period = {
  startDate: Date | undefined;
  endDate: Date | undefined;
};

const AddExperienceScreen: React.FC = () => {
  const navigation = useNavigation();
  const [period, setPeriod] = useState<Period>({
    startDate: undefined,
    endDate: undefined,
  });

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleStartDateChange = useCallback(
    (date: Date | undefined) => {
      setPeriod(curr => ({ ...curr, startDate: date }));
    },
    [setPeriod]
  );

  const handleEndDateChange = useCallback(
    (date: Date | undefined) => {
      setPeriod(curr => ({ ...curr, endDate: date }));
    },
    [setPeriod]
  );

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Company
            </Heading>
            <Input placeholder="Company Name" />
          </View>
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Position
            </Heading>
            <Input placeholder="Position Name" />
          </View>
          <View style={styles.inputContent}>
            <Heading style={styles.heading} level={HeadingLevel.H5}>
              Period
            </Heading>
            <DateInput
              label="Start Date"
              onChange={handleStartDateChange}
              value={period.startDate}
              locale="en"
              inputMode="start"
            />
            <DateInput
              onChange={handleEndDateChange}
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
    </SafeAreaView>
  );
};

export default AddExperienceScreen;
