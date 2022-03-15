import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IAddCareer, ICareer } from 'src/common/types';
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

  public getCareers(): Promise<ICareer[]> {
    return this.#http.load(`${this.#apiPath}${ApiPath.USER_CAREER}`, {
      method: HttpMethod.GET,
      hasAuth: true,
    });
  }

  public addCareer(payload: IAddCareer): Promise<ICareer> {
    return this.#http.load(`${this.#apiPath}${ApiPath.USER_CAREER}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      hasAuth: true,
    });
  }
}

export { CareerApi };
