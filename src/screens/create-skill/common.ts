import { SkillType } from '../../common/enums';

const defaultCreateSkillPayload = {
  type: SkillType.OTHER,
  name: '',
  description: '',
  estimate: 6.7,
};

const skillTypeOptions = [
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

export { defaultCreateSkillPayload, skillTypeOptions };
