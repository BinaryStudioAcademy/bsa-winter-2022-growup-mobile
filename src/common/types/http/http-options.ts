import { ContentType, HttpMethod } from '../../enums';
import { HttpErrorOptions } from '.';

type HttpOptions = {
  method: HttpMethod;
  contentType: ContentType;
  payload: BodyInit_ | null;
  hasAuth: boolean;
  query: Record<string, unknown>;
  errorOptions: HttpErrorOptions;
};

export type { HttpOptions };
