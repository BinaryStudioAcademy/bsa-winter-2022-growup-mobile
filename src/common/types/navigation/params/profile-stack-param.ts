import { ProfileRoute } from 'src/common/enums';
import { ICareer } from '../../career';

type ProfileStackParamList = {
  [ProfileRoute.PROFILE_ROOT]: undefined;
  [ProfileRoute.CREATE_SKILL]: undefined;
  [ProfileRoute.ADD_CAREER_EXPERIENCE]: {
    career?: ICareer;
  };
};

export type { ProfileStackParamList };
