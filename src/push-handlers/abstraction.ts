import { PushNotificationType } from 'src/common/enums';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IPushHandler<T = any> {
  get types(): PushNotificationType[];
  action(type: PushNotificationType, payload: T): void | Promise<void>;
}
