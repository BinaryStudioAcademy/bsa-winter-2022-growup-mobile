import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IAddUserPayload, IUserInfo } from 'src/common/types';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class UserApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public async create(payload: IAddUserPayload): Promise<IUserInfo> {
    return this.#http.load(`${this.#apiPath}${ApiPath.COMPANY_USERS}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }
}

export { UserApi };
