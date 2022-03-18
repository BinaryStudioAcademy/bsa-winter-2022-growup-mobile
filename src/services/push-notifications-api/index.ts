import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import pushHandlers from 'src/push-handlers';
import { PUSH_CHANNEL_NAME, PUSH_ICON_FILENAME } from 'src/common/constants';

type PushNotificationArgs = {
  title?: string;
  body: string;
  type: string;
  payload?: any;
};

class PushNotificationsApi {
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

  public async init() {
    await this.createChannelIfNotExists();
    this.configureNotifications();
  }

  private createChannelIfNotExists(): Promise<void> {
    return new Promise(resolve => {
      PushNotification.createChannel(
        {
          channelId: PUSH_CHANNEL_NAME,
          channelName: PUSH_CHANNEL_NAME,
        },
        () => resolve()
      );
    });
  }

  private configureNotifications() {
    PushNotification.configure({
      onNotification: (notification: any) => {
        if (notification.userInteraction) {
          const handlersToCall = pushHandlers.filter(handler =>
            handler.types.includes(notification.data.type)
          );

          handlersToCall.forEach(handler =>
            handler.action(notification.data.type, notification.data.payload)
          );
        } else {
          this.pushNotification({
            title: notification.title || undefined,
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
}

export { PushNotificationsApi };
