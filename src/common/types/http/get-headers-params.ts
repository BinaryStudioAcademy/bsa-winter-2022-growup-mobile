import { ContentType } from 'src/common/enums';

type GetHeadersParams = {
  contentType?: ContentType;
  hasAuth: boolean;
};

export type { GetHeadersParams };
