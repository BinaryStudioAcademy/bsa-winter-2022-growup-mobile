import { ApiPath } from 'src/common/enums';
import { IAutocompleteResponse } from 'src/common/types';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
  apiKey: string;
};

class GooglePlacesApi {
  #http: Http;
  #apiPath: string;
  #apiKey: string;

  constructor({ http, apiPath, apiKey }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
    this.#apiKey = apiKey;
  }

  public async predictAutocomplete(existingText: string): Promise<string[]> {
    if (!this.checkKey()) {
      return [];
    }

    const response = await this.#http.load<IAutocompleteResponse>(
      `${this.#apiPath}${ApiPath.GOOGLE_PLACES_AUTOCOMPLETE}`,
      {
        query: {
          key: this.#apiKey,
          input: existingText,
          types: '(cities)',
        },
      }
    );

    if (response.status !== 'OK') {
      return [];
    }

    return response.predictions.map(place => place.description);
  }

  private checkKey() {
    return Boolean(this.#apiKey);
  }
}

export { GooglePlacesApi };
