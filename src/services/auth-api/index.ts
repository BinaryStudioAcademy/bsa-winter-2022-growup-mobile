import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { ISignInPayload, IUser } from 'src/common/types';
import { AuthResponse } from 'src/common/types/auth';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class AuthApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public signIn(payload: ISignInPayload): Promise<AuthResponse> {
    return this.#http.load(`${this.#apiPath}${ApiPath.SIGN_IN}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      hasAuth: false,
    });
  }

  public getCurrentUser(payload: string): Promise<IUser> {
    return this.#http.load(`${this.#apiPath}${ApiPath.CURRENT_USER}`, {
      method: HttpMethod.GET,
      hasAuth: true,
      query: {
        Authorization: payload,
      },
    });
  }
}

export { AuthApi };
