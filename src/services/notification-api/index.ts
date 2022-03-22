import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { showErrorToast } from 'src/helpers';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class NotificationApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public async markRead(id: string): Promise<void> {
    try {
      await this.#http.load(
        `${this.#apiPath}${ApiPath.NOTIFICATIONS}${ApiPath.MARK_READ}/${id}`,
        {
          method: HttpMethod.POST,
          contentType: ContentType.JSON,
        }
      );
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ??
          'Failed to mark notification as read'
      );
    }
  }
}

export { NotificationApi };
