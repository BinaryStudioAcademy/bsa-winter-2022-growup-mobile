import { Asset } from 'react-native-image-picker';

import {
  ISignInPayload,
  IUser,
  AuthResponse,
  ISignUpPayload,
} from 'src/common/types';

import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { showErrorToast, assetToMultipartFile } from 'src/helpers';
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

  public async signIn(
    payload: ISignInPayload
  ): Promise<AuthResponse | undefined> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.SIGN_IN}`, {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: false,
      });
    } catch (err) {
      showErrorToast((err as Error | undefined)?.message ?? 'Failed to log in');
    }
  }

  public async signUp(
    payload: ISignUpPayload
  ): Promise<AuthResponse | undefined> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.SIGN_UP}`, {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: false,
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to sign up'
      );
    }
  }

  public async uploadAvatar(image: Asset): Promise<IUser | undefined> {
    const payload = new FormData();
    payload.append('avatar', assetToMultipartFile(image));

    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.USER_AVATAR}`, {
        method: HttpMethod.PUT,
        contentType: ContentType.MULTIPART,
        payload,
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to upload avatar'
      );
    }
  }

  public async getCurrentUser(): Promise<IUser | undefined> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.CURRENT_USER}`);
    } catch {
      // ignore
    }
  }
}

export { AuthApi };
