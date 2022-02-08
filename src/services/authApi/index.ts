import { ApiPath, ContentType, HttpMethod } from '../../common/enums';
import { ISignInPayload, IUser } from '../../common/types';
import { AuthResponse } from '../../common/types/auth';
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

  public getCurrentUser(): Promise<IUser> {
    return this.#http.load(`${this.#apiPath}${ApiPath.CURRENT_USER}`, {
      method: HttpMethod.GET,
    });
  }
}

export { AuthApi };
