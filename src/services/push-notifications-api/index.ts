import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import pushHandlers from 'src/push-handlers';

type PushNotificationArgs = {
  title: string;
  body: string;
  type: string;
  payload?: any;
};

class PushNotificationsApi {
  constructor() {
    PushNotification.configure({
      onNotification: notification => {
        const handlersToCall = pushHandlers.filter(handler =>
          handler.types.includes(notification.data.type)
        );

        handlersToCall.forEach(handler =>
          handler.action(notification.data.type, notification.data.payload)
        );

        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });
  }

  public pushNotification({
    title,
    body,
    type,
    payload,
  }: PushNotificationArgs) {
    PushNotification.localNotification({
      title,
      message: body,
      smallIcon: 'ic_notification',
      channelId: 'growup_push_notifications',
      userInfo: { type, payload },
    });
  }
}

export { PushNotificationsApi };
