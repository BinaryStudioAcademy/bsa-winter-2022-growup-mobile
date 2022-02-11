import React from 'react';
import { View } from 'react-native';
import { en, registerTranslation } from 'react-native-paper-dates';

import { ButtonMode, HeadingLevel } from 'src/common/enums';
import { Heading, Input, MainButton } from 'src/components';
import styles from './styles';

type IInterestingContentScreenProps = Record<string, never>;

registerTranslation('en', en);

const InterestingContent: React.FC<IInterestingContentScreenProps> = () => {
  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H5}>
        Interesting tags
      </Heading>
      <Input
        style={styles.input}
        label="Location"
        placeholder="Enter your location"
      />
      <View style={styles.buttonContainer}>
        <MainButton icon="plus" mode={ButtonMode.OUTLINED}>
          Add
        </MainButton>
      </View>
      <Input
        style={styles.input}
        label="Language"
        placeholder="Enter language you're good at"
      />
      <View style={styles.buttonContainer}>
        <MainButton icon="plus" mode={ButtonMode.OUTLINED}>
          Add
        </MainButton>
      </View>
    </View>
  );
};

export default InterestingContent;
