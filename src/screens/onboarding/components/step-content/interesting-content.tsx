import React from 'react';
import { View } from 'react-native';

import { HeadingLevel, IconName, OnboardingRoute } from 'src/common/enums';
import { Heading, AddButton, LanguageCard } from 'src/components';
import { useAppNavigation, useAppSelector } from 'src/hooks';
import useStyles from './styles';

const InterestingContent: React.FC = () => {
  const styles = useStyles();
  const navigation = useAppNavigation();

  const { languages } = useAppSelector(state => state.language);

  const handleAddLanguage = () => {
    navigation.navigate(OnboardingRoute.ADD_LANGUAGE);
  };

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
        {languages.map(item => (
          <LanguageCard style={styles.cardItem} language={item} key={item.id} />
        ))}
      </View>
    </View>
  );
};

export default InterestingContent;
