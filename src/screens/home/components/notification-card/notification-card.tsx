import React from 'react';
import { View } from 'react-native';

import { INotification } from 'src/common/types';
import { MainButton, Text } from 'src/components';
import styles from './styles';

interface Props {
  notification: INotification;
  onMarkRead: () => void;
}

const NotificationCard: React.FC<Props> = ({ notification, onMarkRead }) => {
  return (
    <View style={styles.card}>
      <Text>{notification.text}</Text>
      <MainButton compact={true} style={styles.button} onPress={onMarkRead}>
        Got it
      </MainButton>
    </View>
  );
};

export default NotificationCard;
