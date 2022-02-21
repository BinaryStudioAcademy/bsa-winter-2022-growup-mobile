import { OKRRoute } from 'src/common/enums';
import { IKeyResult } from '..';

type OKRStackParamList = {
  [OKRRoute.OKR]: undefined;
  [OKRRoute.ADD_OKR]: {
    isTeamOkr: boolean;
  };
  [OKRRoute.ADD_KEY_RESULT]: {
    onAddKeyResult: (keyResult: IKeyResult) => void;
  };
};

export type { OKRStackParamList };
