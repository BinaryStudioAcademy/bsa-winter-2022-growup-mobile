import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IAddEducationPayload } from 'src/common/types';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class EducationApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public addEducation(payload: IAddEducationPayload) {
    return this.#http.load(`${this.#apiPath}${ApiPath.USER_EDUCATION}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }
}

export { EducationApi };
