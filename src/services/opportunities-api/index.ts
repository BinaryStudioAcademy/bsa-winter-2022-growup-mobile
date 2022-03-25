import { ApiPath } from 'src/common/enums';
import { IFullOpportunity, IOpportunity } from 'src/common/types';
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
    const response = await this.#http.load<IOpportunity[]>(
      `${this.#apiPath}${ApiPath.OPPORTUNITIES}`
    );

    return response ?? [];
  }

  public async getOpportunityById(
    id: string
  ): Promise<IFullOpportunity | undefined> {
    return this.#http.load(`${this.#apiPath}${ApiPath.OPPORTUNITIES}/${id}`);
  }
}

export { OpportunitiesApi };
