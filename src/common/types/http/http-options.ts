import { ContentType, HttpMethod } from '../../enums';

type HttpOptions = {
  method: HttpMethod;
  contentType: ContentType;
  payload: BodyInit_ | null;
  hasAuth: boolean;
  query: Record<string, unknown>;
};

export type { HttpOptions };
