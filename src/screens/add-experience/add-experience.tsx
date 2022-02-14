import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { en, registerTranslation } from 'react-native-paper-dates';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { DateInput, Heading, Input, MainButton } from 'src/components';
import styles from './styles';

type AddExperienceScreenProps = Record<string, never>;

type Period = {
  startDate: Date | undefined;
  endDate: Date | undefined;
};

registerTranslation('en', en);

const AddExperienceScreen: React.FC<AddExperienceScreenProps> = () => {
  const navigation = useNavigation();
  const [period, setPeriod] = useState<Period>({
    startDate: undefined,
    endDate: undefined,
  });

  const handleCancel = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <SafeAreaView>
      <View style={styles.screen}>
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
          <MainButton onPress={handleCancel} mode={ButtonMode.OUTLINED}>
            Cancel
          </MainButton>
          <MainButton mode={ButtonMode.CONTAINED}>Add</MainButton>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddExperienceScreen;
