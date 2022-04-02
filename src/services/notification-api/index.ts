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

  public async markRead(_id: string): Promise<void> {
    // TODO: http request
  }
}

export { NotificationApi };
