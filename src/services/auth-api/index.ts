import { Asset } from 'react-native-image-picker';

import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { ISignInPayload, IUser } from 'src/common/types';
import { AuthResponse } from 'src/common/types/auth';
import { showErrorToast } from 'src/helpers';
import { assetToMultipartFile } from 'src/helpers/image-capture';
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
      return this.#http.load(`${this.#apiPath}${ApiPath.SIGN_IN}`, {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: false,
      });
    } catch (err: any) {
      showErrorToast(err?.message ?? 'Failed to log in');
    }
  }

  public async uploadAvatar(image: Asset): Promise<IUser | undefined> {
    const payload = new FormData();
    payload.append('avatar', assetToMultipartFile(image));

    try {
      return this.#http.load(`${this.#apiPath}${ApiPath.USER_AVATAR}`, {
        method: HttpMethod.PUT,
        contentType: ContentType.MULTIPART,
        payload,
      });
    } catch (err: any) {
      showErrorToast(err?.message ?? 'Failed to upload avatar');
    }
  }

  public async getCurrentUser(): Promise<IUser | undefined> {
    try {
      return this.#http.load(`${this.#apiPath}${ApiPath.CURRENT_USER}`);
    } catch {
      // ignore
    }
  }
}

export { AuthApi };
