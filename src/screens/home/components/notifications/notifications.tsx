import React from 'react';
import { View } from 'react-native';

import { HeadingLevel } from 'src/common/enums';
import { INotification } from 'src/common/types';
import { Heading } from 'src/components';
import { NotificationCard } from '..';
import styles from './styles';

interface Props {
  notifications: INotification[];
  onMarkRead: (id: string) => void;
}

const Notifications: React.FC<Props> = ({ notifications, onMarkRead }) => {
  if (!notifications.length) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Heading level={HeadingLevel.H6}>
        Here&apos;s what you&apos;ve missed
      </Heading>
      {notifications.map(notification => (
        <View style={styles.cardWrapper} key={notification.id}>
          <NotificationCard
            notification={notification}
            onMarkRead={() => onMarkRead(notification.id)}
          />
        </View>
      ))}
    </View>
  );
};

export default Notifications;
