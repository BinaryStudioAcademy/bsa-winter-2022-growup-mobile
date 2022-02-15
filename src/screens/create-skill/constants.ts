import { SkillType } from '../../common/enums';

const DEFAULT_CREATE_SKILL_PAYLOAD = {
  type: SkillType.OTHER,
  name: '',
  description: '',
  estimate: 6.7,
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
