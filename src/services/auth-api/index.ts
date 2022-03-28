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
}

export { AuthApi };
