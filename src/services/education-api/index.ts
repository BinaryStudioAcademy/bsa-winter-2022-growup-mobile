import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IAddEducationPayload, IEducation } from 'src/common/types';
import { showErrorToast } from 'src/helpers';
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
    try {
      return this.#http.load(`${this.#apiPath}${ApiPath.USER_EDUCATION}`, {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to add new education'
      );
    }
  }

  public loadEducations() {
    try {
      return this.#http.load(`${this.#apiPath}${ApiPath.USER_EDUCATION}`, {
        method: HttpMethod.GET,
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to load educations'
      );
    }
  }

  public editEducation(payload: IEducation) {
    try {
      return this.#http.load(
        `${this.#apiPath}${ApiPath.USER_EDUCATION}/${payload.id}`,
        {
          method: HttpMethod.PUT,
          contentType: ContentType.JSON,
          payload: JSON.stringify(payload),
        }
      );
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to edit the education'
      );
    }
  }

  public deleteEducation(educationId: string) {
    try {
      return this.#http.load(
        `${this.#apiPath}${ApiPath.USER_EDUCATION}/${educationId}`,
        {
          method: HttpMethod.DELETE,
        }
      );
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to delete the education'
      );
    }
  }
}

export { EducationApi };
