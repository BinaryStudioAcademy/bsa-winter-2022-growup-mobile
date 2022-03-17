import { ProfileRoute } from 'src/common/enums';

type ProfileStackParamList = {
  [ProfileRoute.PROFILE_ROOT]: undefined;
  [ProfileRoute.CREATE_SKILL]: undefined;
  [ProfileRoute.ADD_CAREER_EXPERIENCE]: undefined;
};

export type { ProfileStackParamList };
