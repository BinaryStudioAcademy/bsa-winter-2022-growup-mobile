import { SkillType } from '../../common/enums';
import { ICreateSkillPayload } from '../../common/types';

const DEFAULT_CREATE_SKILL_PAYLOAD: Partial<ICreateSkillPayload> = {
  type: SkillType.OTHER,
};

const SKILL_TYPE_OPTIONS = [
  {
    label: 'Hard skills',
    value: SkillType.HARD_SKILLS,
  },
  {
    label: 'Soft skills',
    value: SkillType.SOFT_SKILLS,
  },
  {
    label: 'Other',
    value: SkillType.OTHER,
  },
];

export { DEFAULT_CREATE_SKILL_PAYLOAD, SKILL_TYPE_OPTIONS };
