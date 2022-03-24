import { ApiPath } from 'src/common/enums';
import { IFullOpportunity, IOpportunity } from 'src/common/types';
import { showErrorToast } from 'src/helpers';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class OpportunitiesApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public async getOpportunities(): Promise<IOpportunity[]> {
    try {
      return await this.#http.load(`${this.#apiPath}${ApiPath.OPPORTUNITIES}`);
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ?? 'Failed to load opportunities'
      );

      return [];
    }
  }

  public async getOpportunityById(
    id: string
  ): Promise<IFullOpportunity | undefined> {
    try {
      return await this.#http.load(
        `${this.#apiPath}${ApiPath.OPPORTUNITIES}/${id}`
      );
    } catch (err) {
      showErrorToast(
        (err as Error | undefined)?.message ??
          'Failed to load opportunity details'
      );
    }
  }
}

export { OpportunitiesApi };
