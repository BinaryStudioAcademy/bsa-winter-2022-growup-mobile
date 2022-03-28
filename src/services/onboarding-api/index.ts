import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IOnboarding, IUser } from 'src/common/types';
import { showErrorToast } from 'src/helpers';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class OnboardingApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public async updateUserData(
    payload: IOnboarding
  ): Promise<IUser | undefined> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.ONBOARDING}`, {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: true,
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to update profile'
      );
    }
  }
}

export { OnboardingApi };
