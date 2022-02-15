import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { HeadingLevel, IconName, OnboardingRoute } from 'src/common/enums';
import { OnboardingStackParamList } from 'src/common/types';
import { Heading } from 'src/components';
import { AddButton } from '..';
import styles from './styles';

type InterestingContentScreenProps = NativeStackNavigationProp<
  OnboardingStackParamList,
  OnboardingRoute.ADD_LANGUAGE | OnboardingRoute.ADD_LOCATION
>;

const InterestingContent: React.FC = () => {
  const navigation = useNavigation<InterestingContentScreenProps>();

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
