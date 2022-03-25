import { ContentType, HttpMethod } from '../../enums';

type HttpOptions = {
  method: HttpMethod;
  contentType: ContentType;
  payload: BodyInit_ | null;
  hasAuth: boolean;
  query: Record<string, unknown>;
  notifyError: boolean;
  customErrorMessage: string;
};

export type { HttpOptions };
