import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IEducation } from 'src/common/types';
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

  public async addEducation(payload: IEducation): Promise<IEducation> {
    return await this.#http.load(`${this.#apiPath}${ApiPath.USER_EDUCATION}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }

  public async loadEducations(): Promise<IEducation[]> {
    return await this.#http.load(`${this.#apiPath}${ApiPath.USER_EDUCATION}`, {
      method: HttpMethod.GET,
    });
  }

  public async editEducation(payload: IEducation): Promise<IEducation> {
    return await this.#http.load(
      `${this.#apiPath}${ApiPath.USER_EDUCATION}/${payload.id}`,
      {
        method: HttpMethod.PUT,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      }
    );
  }

  public async deleteEducation(educationId: string) {
    return await this.#http.load(
      `${this.#apiPath}${ApiPath.USER_EDUCATION}/${educationId}`,
      {
        method: HttpMethod.DELETE,
      }
    );
  }
}

export { EducationApi };
