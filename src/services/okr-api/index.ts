import { IAddOkr } from 'src/common/types/okr/add-okr.interface';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class OKRApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public async createOKR(payload: IAddOkr): Promise<IAddOkr> {
    // TODO add request
    return payload;
  }
}

export { OKRApi };
