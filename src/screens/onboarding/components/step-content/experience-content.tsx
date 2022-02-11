import React, { useState } from 'react';
import { View } from 'react-native';
import { en, registerTranslation } from 'react-native-paper-dates';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { DateInput, Heading, Input, MainButton } from 'src/components';
import styles from './styles';

type IExperienceContentScreenProps = Record<string, never>;

registerTranslation('en', en);

const ExperienceContent: React.FC<IExperienceContentScreenProps> = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H5}>
        Professional experience
      </Heading>
      <Input
        style={styles.input}
        label="Company name"
        placeholder="Enter company name"
      />
      <Input style={styles.input} label="Role" placeholder="Enter your role" />
      <DateInput
        value={startDate}
        onChange={date => setStartDate(date)}
        inputMode="start"
        label="Start date"
        locale="en"
      />
      <DateInput
        value={endDate}
        onChange={date => setEndDate(date)}
        inputMode="start"
        label="End date"
        locale="en"
      />
      <View style={styles.buttonContainer}>
        <MainButton icon="plus" mode={ButtonMode.OUTLINED}>
          Add
        </MainButton>
      </View>
    </View>
  );
};

export default ExperienceContent;
