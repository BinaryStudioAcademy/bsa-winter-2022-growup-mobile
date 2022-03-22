import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { IQuizQuestion, IQuizResult } from 'src/common/types';
import { showErrorToast } from 'src/helpers';
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
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.QUIZ_QUESTION}`, {
        method: HttpMethod.GET,
        hasAuth: true,
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to load questions'
      );

      return [];
    }
  }

  public async sendQuizResults(
    payload: IQuizQuestion[]
  ): Promise<IQuizResult[]> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.QUIZ_RESULT}`, {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify(payload),
        hasAuth: true,
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to load questions'
      );

      return [];
    }
  }

  public async loadQuizResults(): Promise<IQuizResult[]> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.QUIZ_RESULT}`, {
        method: HttpMethod.GET,
        hasAuth: true,
      });
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to load questions'
      );

      return [];
    }
  }
}

export { QuizApi };
