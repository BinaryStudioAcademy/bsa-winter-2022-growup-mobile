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

  public async loadQuizQuestions(): Promise<IQuizQuestion[]> {
    const response = await this.#http.load<IQuizQuestion[]>(
      `${this.#apiPath}${ApiPath.QUIZ_QUESTION}`
    );

    return response ?? [];
  }

  public async sendQuizResults(
    payload: IQuizQuestion[]
  ): Promise<IQuizResult[]> {
    const response = await this.#http.load<IQuizResult[]>(
      `${this.#apiPath}${ApiPath.QUIZ_RESULT}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
      }
    );

    return response ?? [];
  }

  public async loadQuizResults(): Promise<IQuizResult[]> {
    const response = await this.#http.load<IQuizResult[]>(
      `${this.#apiPath}${ApiPath.QUIZ_RESULT}`
    );

    return response ?? [];
  }
}

export { QuizApi };
