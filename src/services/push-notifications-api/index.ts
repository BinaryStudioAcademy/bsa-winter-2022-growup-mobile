import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import pushHandlers from 'src/push-handlers';
import { PUSH_CHANNEL_NAME, PUSH_ICON_FILENAME } from 'src/common/constants';

type PushNotificationArgs = {
  title: string;
  body: string;
  type: string;
  payload?: any;
};

class PushNotificationsApi {
  constructor() {
    PushNotification.createChannel({
      channelId: PUSH_CHANNEL_NAME, // (required)
      channelName: 'Special messasge', // (required)
      channelDescription: 'Notification for special message', // (optional) default: undefined.
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
    });

    PushNotification.configure({
      onNotification: (notification: any) => {
        const handlersToCall = pushHandlers.filter(handler =>
          handler.types.includes(notification.data.type)
        );
        handlersToCall.forEach(handler =>
          handler.action(notification.data.type, notification.data.payload)
        );

        this.pushNotification({
          title: notification.title,
          body: notification.message.toString(),
          type: 'type',
        });

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
      smallIcon: PUSH_ICON_FILENAME,
      channelId: PUSH_CHANNEL_NAME,
      userInfo: { type, payload },
    });
  }
}

export { PushNotificationsApi };
