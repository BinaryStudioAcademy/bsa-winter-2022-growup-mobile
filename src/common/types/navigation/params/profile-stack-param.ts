import { ProfileRoute } from 'src/common/enums';
import { ICareer } from '../../career';

type ProfileStackParamList = {
  [ProfileRoute.PROFILE_ROOT]: undefined;
  [ProfileRoute.CREATE_SKILL]: undefined;
  [ProfileRoute.ADD_EDUCATION]: undefined;
  [ProfileRoute.ADD_CAREER_EXPERIENCE]: {
    isEdit: boolean;
    career?: ICareer;
  };
};

export type { ProfileStackParamList };
