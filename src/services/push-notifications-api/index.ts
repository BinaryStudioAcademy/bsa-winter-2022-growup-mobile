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
      smallIcon: PUSH_ICON_FILENAME,
      channelId: PUSH_CHANNEL_NAME,
      userInfo: { type, payload },
    });
  }
}

export { PushNotificationsApi };
