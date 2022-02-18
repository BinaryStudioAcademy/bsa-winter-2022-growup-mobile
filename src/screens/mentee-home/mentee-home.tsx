import React from 'react';
import { ScrollView, View } from 'react-native';

import { INotification, IOpportunity } from 'src/common/types';
import { useAppDispatch } from 'src/hooks';
import { notificationActions } from 'src/store/notification';

import {
  Header,
  NotificationsSection,
  OpportunitiesSection,
} from './components';

import styles from './styles';

const MenteeHome: React.FC = () => {
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
      orgGroup: 'Binary Studio',
      tags: ['Kyiv', 'Remote'],
      type: 'Project',
      startDate: new Date('2022-02-23'),
    },
    {
      id: '2',
      name: 'Designer',
      orgGroup: 'Super Designers',
      type: 'Project',
      startDate: new Date('2022-03-01'),
      tags: ['Lviv'],
    },
  ];

  const handleMarkRead = (id: string) => {
    dispatch(notificationActions.markNotificationRead(id));
  };

  const handleOpportunityDetails = () => {
    // TODO: navigate
  };

  return (
    <View>
      <Header>Looking for some jobs?</Header>
      <ScrollView contentContainerStyle={styles.container}>
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
  );
};

export default MenteeHome;
