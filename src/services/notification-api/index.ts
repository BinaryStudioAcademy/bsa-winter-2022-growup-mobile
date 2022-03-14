import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { notify } from 'src/helpers';
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
    } catch (err: any) {
      notify(err?.message ?? 'Failed to mark notification as read');
    }
  }
}

export { NotificationApi };
