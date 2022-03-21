import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IQuizQuestion, IQuizResult } from 'src/common/types';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class QuizApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public loadQuizQuestions(): Promise<IQuizQuestion[]> {
    return this.#http.load(`${this.#apiPath}${ApiPath.QUIZ_QUESTION}`, {
      method: HttpMethod.GET,
      hasAuth: true,
    });
  }

  public sendQuizResults(payload: IQuizQuestion[]): Promise<IQuizResult[]> {
    return this.#http.load(`${this.#apiPath}${ApiPath.QUIZ_RESULT}`, {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
      hasAuth: true,
    });
  }

  public loadQuizResults(): Promise<IQuizResult[]> {
    return this.#http.load(`${this.#apiPath}${ApiPath.QUIZ_RESULT}`, {
      method: HttpMethod.GET,
      hasAuth: true,
    });
  }
}

export { QuizApi };
