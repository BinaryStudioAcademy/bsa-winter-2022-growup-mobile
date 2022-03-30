import { SkillType } from '../../common/enums';

const defaultCreateSkillPayload = {
  type: SkillType.HARD_SKILLS,
  name: '',
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
    label: 'Language',
    value: SkillType.LANGUAGE,
  },
];

export { defaultCreateSkillPayload, skillTypeOptions };
