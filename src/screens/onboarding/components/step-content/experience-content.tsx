import React from 'react';
import { ScrollView, View } from 'react-native';

import { HeadingLevel } from 'src/common/enums';
import { Heading } from 'src/components';
import { AddButton } from '../';
import styles from './styles';

type IExperienceContentScreenProps = Record<string, never>;

const ExperienceContent: React.FC<IExperienceContentScreenProps> = () => {
  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H4}>
        What Is Your Experience?
      </Heading>
      <View style={styles.buttonContainer}>
        <AddButton>Add Experience</AddButton>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* TODO map experience card */}
      </ScrollView>
    </View>
  );
};

export default ExperienceContent;
