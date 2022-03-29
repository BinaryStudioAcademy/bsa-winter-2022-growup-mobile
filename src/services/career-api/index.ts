import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IAddCareerPayload, ICareer } from 'src/common/types';
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
    const response = await this.#http.load<ICareer[]>(
      `${this.#apiPath}${ApiPath.USER_CAREER}`
    );

    return response ?? [];
  }

  public addCareer(payload: IAddCareerPayload): Promise<ICareer> {
    return this.#http.load(`${this.#apiPath}${ApiPath.USER_CAREER}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  public deleteCareer(id: string) {
    return this.#http.load(`${this.#apiPath}${ApiPath.USER_CAREER}/${id}`, {
      method: HttpMethod.DELETE,
    });
  }

  public editCareer(payload: ICareer): Promise<ICareer> {
    return this.#http.load(
      `${this.#apiPath}${ApiPath.USER_CAREER}/${payload.id}`,
      {
        method: HttpMethod.PUT,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      }
    );
  }
}

export { CareerApi };
