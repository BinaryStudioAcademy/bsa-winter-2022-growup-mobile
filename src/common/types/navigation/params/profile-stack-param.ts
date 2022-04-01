import { ProfileRoute } from 'src/common/enums';
import { ICareer } from '../../career';
import { IEducation } from '../../education';

type ProfileStackParamList = {
  [ProfileRoute.PROFILE_ROOT]: undefined;
  [ProfileRoute.CREATE_SKILL]: undefined;
  [ProfileRoute.ADD_EDUCATION]:
    | {
        education: IEducation;
      }
    | undefined;
  [ProfileRoute.ADD_CAREER_EXPERIENCE]:
    | {
        career: ICareer;
      }
    | undefined;
  [ProfileRoute.ADD_LANGUAGE]: undefined;
};

export type { ProfileStackParamList };
