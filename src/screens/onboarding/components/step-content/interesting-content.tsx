import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { View } from 'react-native';
import { en, registerTranslation } from 'react-native-paper-dates';

import { HeadingLevel, IconName, OnboardingRoute } from 'src/common/enums';
import { Heading } from 'src/components';
import { AddButton } from '..';
import styles from './styles';

type InterestingContentScreenProps = Record<string, never>;

registerTranslation('en', en);

const InterestingContent: React.FC<InterestingContentScreenProps> = () => {
  const navigation = useNavigation();

  const handleAddLanguage = useCallback(() => {
    navigation.navigate(OnboardingRoute.ADD_LANGUAGE);
  }, [navigation]);

  const handleAddLocation = useCallback(() => {
    navigation.navigate(OnboardingRoute.ADD_LOCATION);
  }, [navigation]);

  return (
    <View style={styles.content}>
      <Heading style={styles.header} level={HeadingLevel.H4}>
        Additional Info
      </Heading>
      <View style={styles.interestingContent}>
        <Heading style={styles.interestingHeadings} level={HeadingLevel.H5}>
          What languages do you speak?
        </Heading>
        <AddButton
          onPress={handleAddLanguage}
          labelStyle={styles.tabButtonLabel}
          style={styles.tagButton}
          icon={IconName.CHAT_PLUS}
        >
          Add Language
        </AddButton>
        <Heading style={styles.interestingHeadings} level={HeadingLevel.H5}>
          What are your locations?
        </Heading>
        <AddButton
          onPress={handleAddLocation}
          labelStyle={styles.tabButtonLabel}
          style={styles.tagButton}
          icon={IconName.MAP_MARKER_PLUS}
        >
          Add Location
        </AddButton>
      </View>
    </View>
  );
};

export default InterestingContent;
