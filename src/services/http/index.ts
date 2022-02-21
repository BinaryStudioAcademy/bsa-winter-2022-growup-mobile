import {
  HttpCode,
  HttpHeader,
  HttpMethod,
  SecureStorageKey,
} from 'src/common/enums';
import { GetHeadersParams, HttpOptions } from 'src/common/types';
import { HttpError } from 'src/exceptions';
import { getStringifiedQuery } from 'src/helpers';
import { secureStorage as secureStorageService } from 'src/services';
import { store } from 'src/store';
import { authActions } from 'src/store/actions';

type Constructor = {
  storage: typeof secureStorageService;
};

class Http {
  #storage: typeof secureStorageService;

  constructor({ storage }: Constructor) {
    this.#storage = storage;
  }

  async load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {}
  ): Promise<T> {
    const {
      method = HttpMethod.GET,
      payload = null,
      contentType,
      hasAuth = true,
      query,
    } = options;

    const headers = await this.getHeaders({
      contentType,
      hasAuth,
    });

    return fetch(this.getUrl(url, query), {
      method,
      headers,
      body: payload,
    })
      .then(this.checkStatus)
      .then(res => this.parseJSON<T>(res))
      .catch(this.throwError);
  }

  private getUrl(url: string, query?: Record<string, unknown>): string {
    return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`;
  }

  private async getHeaders({
    contentType,
    hasAuth,
  }: GetHeadersParams): Promise<Headers> {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (hasAuth) {
      console.log('TOKEN REQUIRED!');
      const token = await this.#storage.getItem(SecureStorageKey.ACCESS_TOKEN);
      console.log('TOKEN: ', token);

      headers.append(HttpHeader.AUTHORIZATION, `${token}`);
    }

    return headers;
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      if (this.isUnauthorized(response)) {
        this.refreshToken();
        return response;
      }

      const parsedException = await response.json().catch(() => ({
        message: response.statusText,
      }));

      throw new HttpError({
        status: response.status,
        message: parsedException?.message,
      });
    }

    return response;
  }

  private isUnauthorized(response: Response): boolean {
    return response.status === HttpCode.UNAUTHORIZED;
  }

  private refreshToken(): void {
    this.#storage.removeItem(SecureStorageKey.ACCESS_TOKEN);
    store.dispatch(authActions.signOut());
  }

  private parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private throwError(err: Error): never {
    throw err;
  }
}

export { Http };
