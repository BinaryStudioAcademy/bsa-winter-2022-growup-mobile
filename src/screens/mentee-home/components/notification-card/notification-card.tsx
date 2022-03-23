import React from 'react';

import { INotification } from 'src/common/types';
import { MinorCard, MainButton, Text } from 'src/components';
import useStyles from './styles';

type NotificationCardProps = {
  notification: INotification;
  onMarkRead: () => void;
};

const NotificationCard: React.FC<NotificationCardProps> = ({
  notification,
  onMarkRead,
}) => {
  const styles = useStyles();

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
