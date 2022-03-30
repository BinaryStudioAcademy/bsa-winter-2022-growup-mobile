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

  public async signUp(payload: ISignUpPayload): Promise<AuthResponse> {
    return this.#http.load(`${this.#apiPath}${ApiPath.SIGN_UP}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      hasAuth: false,
    });
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

  public async verifyToken(
    accessToken: string
  ): Promise<{ token: string } | undefined> {
    const response: { token: string } | undefined = await this.#http.load(
      `${this.#apiPath}${ApiPath.VERIFY_TOKEN}/${accessToken}`
    );

    return response;
  }

  public async completeRegistration(payload: {
    payload: { token: string; password: string };
  }) {
    const { password, token } = payload.payload;

    const response = await this.#http.load(
      `${this.#apiPath}${ApiPath.COMPLETE_REGISTRATION}`,
      {
        method: HttpMethod.PATCH,
        contentType: ContentType.JSON,
        payload: JSON.stringify({
          password: password,
          firstName: '',
          lastName: '',
          position: '',
        }),
        hasAuth: false,
        accessToken: token,
      }
    );

    return response;
  }
}

export { AuthApi };
