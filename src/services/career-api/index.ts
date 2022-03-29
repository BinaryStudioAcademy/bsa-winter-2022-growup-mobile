import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IAddCareerPayload, ICareer } from 'src/common/types';
import { showErrorToast } from 'src/helpers';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class CareerApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public async getCareers(): Promise<ICareer[]> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.USER_CAREER}`);
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to load careers'
      );

      return [];
    }
  }

  public async addCareer(
    payload: IAddCareerPayload
  ): Promise<ICareer | undefined> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.USER_CAREER}`, {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to create career'
      );
    }
  }

  public async deleteCareer(id: string) {
    try {
      return await this.#http.load(
        `${this.#apiPath}${ApiPath.USER_CAREER}/${id}`,
        {
          method: HttpMethod.DELETE,
        }
      );
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to delete career'
      );
    }
  }

  public async editCareer(payload: ICareer): Promise<ICareer | undefined> {
    try {
      return await this.#http.load(
        `${this.#apiPath}${ApiPath.USER_CAREER}/${payload.id}`,
        {
          method: HttpMethod.PUT,
          contentType: ContentType.JSON,
          payload: JSON.stringify(payload),
        }
      );
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to update career'
      );
    }
  }
}

export { CareerApi };
