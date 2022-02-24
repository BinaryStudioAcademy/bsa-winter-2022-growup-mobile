import { Asset } from 'react-native-image-picker';

import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { ISignInPayload, IUser, AuthResponse } from 'src/common/types';
import { ChallengeResponse } from 'src/common/types/auth/challenge-response';
import { decodeServerChallenge } from 'src/helpers';
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

  public signIn(payload: ISignInPayload): Promise<AuthResponse> {
    return this.#http.load(`${this.#apiPath}${ApiPath.SIGN_IN}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      hasAuth: false,
    });
  }

  public async signInFingerprint(email: string): Promise<AuthResponse> {
    const { challenge } = await this.#http.load<ChallengeResponse>(
      `${this.#apiPath}${ApiPath.SIGN_IN_FINGERPRINT}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify({ email }),
        hasAuth: false,
      }
    );

    const decoded = decodeServerChallenge(challenge);

    return this.#http.load(`${this.#apiPath}${ApiPath.SIGN_IN_CHALLENGE}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify({ challenge: decoded }),
      hasAuth: false,
    });
  }

  public uploadAvatar(image: Asset): Promise<IUser> {
    const payload = new FormData();
    payload.append('avatar', assetToMultipartFile(image));

    return this.#http.load(`${this.#apiPath}${ApiPath.USER_AVATAR}`, {
      method: HttpMethod.PUT,
      contentType: ContentType.MULTIPART,
      payload,
    });
  }

  public getCurrentUser(): Promise<IUser> {
    return this.#http.load(`${this.#apiPath}${ApiPath.CURRENT_USER}`);
  }
}

export { AuthApi };
