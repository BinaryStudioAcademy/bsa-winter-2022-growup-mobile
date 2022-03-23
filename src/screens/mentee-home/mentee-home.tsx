import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { OpportunityType } from 'src/common/enums';
import { INotification, IOpportunity } from 'src/common/types';
import { useAppDispatch } from 'src/hooks';
import { notificationActions } from 'src/store/actions';

import {
  Header,
  NotificationsSection,
  OpportunitiesSection,
} from './components';

import useStyles from './styles';

const MenteeHome: React.FC = () => {
  const styles = useStyles();

  const dispatch = useAppDispatch();

  const notifications: INotification[] = [
    // TODO: useSelector
    {
      id: '1',
      text: 'You have been offered a new position!',
    },
    {
      id: '2',
      text: "You've learned everything to become a Fullstack JS Developer",
    },
  ];

  const opportunities: IOpportunity[] = [
    // TODO: useSelector
    {
      id: '1',
      name: 'Senior PHP Developer',
      organization: 'Binary Studio',
      tags: ['Kyiv', 'Remote'],
      type: OpportunityType.Project,
      startDate: '2022-02-23',
      user: '1',
      company: '1',
      createdAt: 'date',
      updatedAt: 'date',
      deletedAt: null,
    },
    {
      id: '2',
      name: 'Designer',
      organization: 'Super Designers',
      type: OpportunityType.Project,
      startDate: '2022-03-01',
      tags: ['Lviv'],
      user: '1',
      company: '1',
      createdAt: 'date',
      updatedAt: 'date',
      deletedAt: null,
    },
  ];

  const handleMarkRead = (id: string) => {
    dispatch(notificationActions.markNotificationRead(id));
  };

  const handleOpportunityDetails = () => {
    // TODO: navigate
  };

  return (
    <SafeAreaView>
      <View>
        <Header>Looking for some jobs?</Header>
        <ScrollView contentContainerStyle={styles.screen}>
          <NotificationsSection
            notifications={notifications}
            onMarkRead={handleMarkRead}
          />
          <OpportunitiesSection
            opportunities={opportunities}
            onDetails={handleOpportunityDetails}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default MenteeHome;
