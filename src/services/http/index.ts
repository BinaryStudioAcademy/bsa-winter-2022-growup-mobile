import {
  HttpCode,
  HttpHeader,
  HttpMethod,
  SecureStorageKey,
} from 'src/common/enums';

import { GetHeadersParams, HttpOptions } from 'src/common/types';
import { HttpError } from 'src/exceptions';
import { getStringifiedQuery, showErrorToast } from 'src/helpers';
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
      accessToken = null,
      contentType,
      hasAuth = true,
      query,
      errorOptions = {
        notify: true,
      },
    } = options;

    const { notify: notifyError = true, customMessage: customErrorMessage } =
      errorOptions;

    const headers = await this.getHeaders({
      contentType,
      hasAuth,
      accessToken,
    });

    return fetch(this.getUrl(url, query), {
      method,
      headers,
      body: payload,
    })
      .then(this.checkStatus.bind(this))
      .then(res => this.parseJSON<T>(res))
      .catch(err => this.handleError(err, notifyError, customErrorMessage));
  }

  private getUrl(url: string, query?: Record<string, unknown>): string {
    return `${url}${query ? `?${getStringifiedQuery(query)}` : ''}`;
  }

  private async getHeaders({
    contentType,
    hasAuth,
    accessToken,
  }: GetHeadersParams): Promise<Headers> {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (hasAuth) {
      let token = accessToken;

      if (!token) {
        token = await this.#storage.getItem(SecureStorageKey.ACCESS_TOKEN);
      }

      headers.append(HttpHeader.AUTHORIZATION, token || '');
    }

    return headers;
  }

  private async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      if (this.isUnauthorized(response)) {
        this.refreshToken();
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

  private handleError(
    err: Error,
    notify?: boolean,
    customErrorMessage?: string
  ): never {
    if (notify) {
      showErrorToast(customErrorMessage ?? err.message);
    }

    throw err;
  }
}

export { Http };
