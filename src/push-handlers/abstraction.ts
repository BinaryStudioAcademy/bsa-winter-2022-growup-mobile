import { PushNotificationType } from 'src/common/enums';

export interface IPushHandler<T = any> {
  get types(): PushNotificationType[];
  action(type: PushNotificationType, payload: T): void | Promise<void>;
}
