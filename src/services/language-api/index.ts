import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IAddLanguagePayload, ILanguage } from 'src/common/types';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class LanguageApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public async loadLanguages(): Promise<ILanguage[]> {
    const response = await this.#http.load<ILanguage[]>(
      `${this.#apiPath}${ApiPath.LANGUAGE}`
    );

    return response ?? [];
  }

  public addLanguage(payload: IAddLanguagePayload[]): Promise<ILanguage[]> {
    return this.#http.load(`${this.#apiPath}${ApiPath.LANGUAGE}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });
  }
}

export { LanguageApi };
