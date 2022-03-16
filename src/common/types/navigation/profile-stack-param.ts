import { ProfileRoute } from 'src/common/enums';
import { ICareer } from '../career';

type ProfileParamList = {
  [ProfileRoute.PROFILE_ROOT]: undefined;
  [ProfileRoute.CREATE_SKILL]: undefined;
  [ProfileRoute.ADD_CAREER_EXPERIENCE]: {
    isEdit: boolean;
    career: ICareer;
  };
};

export type { ProfileParamList };
