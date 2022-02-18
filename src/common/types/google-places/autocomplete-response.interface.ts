import { IPlace } from '.';

interface IAutocompleteResponse {
  status: string;
  predictions: IPlace[];
}

export type { IAutocompleteResponse };
