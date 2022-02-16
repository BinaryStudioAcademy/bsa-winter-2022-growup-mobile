import React from 'react';
import { ScrollView, View } from 'react-native';

import { INotification, IOpportunity } from 'src/common/types';
import { AvatarHeader, Notifications, Opportunities } from '..';
import styles from './styles';

const MenteeHome: React.FC = () => {
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
      position: 'Senior PHP Developer',
      company: 'Binary Studio',
    },
    {
      id: '2',
      position: 'Designer',
      company: 'Super Designers',
    },
  ];

  const handleMarkRead = () => {
    // TODO: redux action
  };

  const handleOpportunityDetails = () => {
    // TODO: navigate
  };

  return (
    <View>
      <AvatarHeader>Looking for some jobs?</AvatarHeader>
      <ScrollView contentContainerStyle={styles.container}>
        <Notifications
          notifications={notifications}
          onMarkRead={handleMarkRead}
        />
        <Opportunities
          opportunities={opportunities}
          onDetails={handleOpportunityDetails}
        />
      </ScrollView>
    </View>
  );
};

export default MenteeHome;
