import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HeadingLevel, TagType, TextAppearance } from 'src/common/enums';

import { Avatar, Heading, Tag, Text } from 'src/components';
import { useAppNavigation, useAppSelector } from 'src/hooks';
import useStyles from './styles';

const OpportunityDetailsScreen: React.FC = () => {
  const navigation = useAppNavigation();
  const styles = useStyles();

  const { expandedOpportunity } = useAppSelector(state => state.opportunity);

  useEffect(() => {
    if (!expandedOpportunity) {
      navigation.goBack();
    }
  }, [navigation, expandedOpportunity]);

  if (!expandedOpportunity) {
    return null;
  }

  const { name, organization, type, user, company, tags } = expandedOpportunity;

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Heading level={HeadingLevel.H5}>{name}</Heading>
        <Text>
          {type} from {organization} in company {company.name}
        </Text>
        {Boolean(tags.length) && (
          <>
            <Heading level={HeadingLevel.H6} style={styles.subheader}>
              What&apos;s it all about?
            </Heading>
            <View style={styles.tagsContainer}>
              {tags.map(tag => (
                <Tag
                  style={styles.tag}
                  text={tag.name}
                  key={tag.id}
                  tagType={TagType.COMMON}
                />
              ))}
            </View>
          </>
        )}
        <Heading level={HeadingLevel.H6} style={styles.subheader}>
          Who offered this?
        </Heading>
        <View style={styles.user}>
          <Avatar size={32} url={user.avatar} />
          <View style={styles.userInfo}>
            <Text>
              {user.firstName} {user.lastName}
            </Text>
            <Text appearance={TextAppearance.HINT}>{user.email}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OpportunityDetailsScreen;
