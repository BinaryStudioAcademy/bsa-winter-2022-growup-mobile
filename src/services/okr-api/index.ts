import { ApiPath } from 'src/common/enums';
import { IOkr, IAddOkr } from 'src/common/types';
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

  public getAll(): Promise<IOkr[]> {
    return this.#http.load(`${this.#apiPath}${ApiPath.OKR}`);
  }

  public async createOKR(payload: IAddOkr): Promise<IAddOkr> {
    // TODO add request
    return payload;
  }
}

export { OKRApi };
