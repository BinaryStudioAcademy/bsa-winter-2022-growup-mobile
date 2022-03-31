import { Asset } from 'react-native-image-picker';

import {
  ISignInPayload,
  IUser,
  AuthResponse,
  ISignUpPayload,
} from 'src/common/types';

import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { assetToMultipartFile } from 'src/helpers';
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

  public async signIn(payload: ISignInPayload): Promise<AuthResponse> {
    return this.#http.load(`${this.#apiPath}${ApiPath.SIGN_IN}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      hasAuth: false,
    });
  }

  public async signUp(payload: ISignUpPayload): Promise<AuthResponse> {
    return this.#http.load(`${this.#apiPath}${ApiPath.SIGN_UP}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      hasAuth: false,
    });
  }

  public async uploadAvatar(image: Asset): Promise<IUser> {
    const payload = new FormData();
    payload.append('avatar', assetToMultipartFile(image));

    return this.#http.load(`${this.#apiPath}${ApiPath.USER_AVATAR}`, {
      method: HttpMethod.PUT,
      contentType: ContentType.MULTIPART,
      payload,
    });
  }

  public async getCurrentUser(): Promise<IUser> {
    return this.#http.load(`${this.#apiPath}${ApiPath.CURRENT_USER}`, {
      errorOptions: {
        notify: false,
      },
    });
  }

  public async completeRegistration(payload: {
    token: string;
    password: string;
  }) {
    const authToken: { token: string } = await this.#http.load(
      `${this.#apiPath}${ApiPath.VERIFY_TOKEN}/${payload.token}`
    );

    const response = await this.#http.load(
      `${this.#apiPath}${ApiPath.COMPLETE_REGISTRATION}`,
      {
        method: HttpMethod.PATCH,
        contentType: ContentType.JSON,
        payload: JSON.stringify({
          password: payload.password,
          firstName: '',
          lastName: '',
          position: '',
        }),
        hasAuth: false,
        accessToken: authToken.token,
      }
    );

    return response;
  }
}

export { AuthApi };
