import { OKRRoute } from 'src/common/enums';

type OKRStackParamList = {
  [OKRRoute.OKR]: undefined;
  [OKRRoute.ADD_OKR]: {
    isTeamOkr: boolean;
  };
  [OKRRoute.ADD_KEY_RESULT]: undefined;
};

export type { OKRStackParamList };
