import React from 'react';

import { INotification } from 'src/common/types';
import { MainButton, Text } from 'src/components';
import { MinorCard } from '..';
import styles from './styles';

type NotificationCardProps = {
  notification: INotification;
  onMarkRead: () => void;
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
  onMarkRead,
}) => {
  return (
    <MinorCard>
      <Text>{notification.text}</Text>
      <MainButton compact={true} style={styles.button} onPress={onMarkRead}>
        Got it
      </MainButton>
    </MinorCard>
  );
};

export default NotificationCard;
