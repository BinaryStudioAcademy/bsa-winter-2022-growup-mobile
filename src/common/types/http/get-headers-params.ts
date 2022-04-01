import { ContentType } from 'src/common/enums';

type GetHeadersParams = {
  contentType?: ContentType;
  hasAuth: boolean;
  accessToken: string | null;
};

export type { GetHeadersParams };
