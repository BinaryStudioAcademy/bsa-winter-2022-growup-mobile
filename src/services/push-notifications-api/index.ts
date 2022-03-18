import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import pushHandlers from 'src/push-handlers';

import {
  PUSH_TITLE,
  PUSH_CHANNEL_NAME,
  PUSH_ICON_FILENAME,
} from 'src/common/constants';

type PushNotificationArgs = {
  body: string;
  type: string;
  payload?: any;
};

class PushNotificationsApi {
  constructor() {
    PushNotification.configure({
      onNotification: notification => {
        if (notification.userInteraction) {
          const handlersToCall = pushHandlers.filter(handler =>
            handler.types.includes(notification.data.type)
          );

          handlersToCall.forEach(handler =>
            handler.action(notification.data.type, notification.data.payload)
          );
        } else {
          this.pushNotification({
            body: notification.message.toString(),
            type: notification.data.type,
            payload: notification.data.payload,
          });
        }

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

  public pushNotification({ body, type, payload }: PushNotificationArgs) {
    PushNotification.localNotification({
      title: PUSH_TITLE,
      message: body,
      smallIcon: PUSH_ICON_FILENAME,
      channelId: PUSH_CHANNEL_NAME,
      userInfo: { type, payload },
    });
  }
}

export { PushNotificationsApi };
