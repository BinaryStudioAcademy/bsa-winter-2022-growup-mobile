import React from 'react';
import { ScrollView, View } from 'react-native';

import { AvatarHeader, Notifications } from '..';
import styles from './styles';

const MenteeHome: React.FC = () => {
  const notifications = [
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

  const handleMarkRead = () => {
    // TODO: redux action
  };

  return (
    <View>
      <AvatarHeader>Looking for some jobs?</AvatarHeader>
      <ScrollView contentContainerStyle={styles.container}>
        <Notifications
          notifications={notifications}
          onMarkRead={handleMarkRead}
        />
      </ScrollView>
    </View>
  );
};

export default MenteeHome;
