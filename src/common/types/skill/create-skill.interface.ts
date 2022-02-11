import { SkillType } from 'src/common/enums';

interface ICreateSkill {
  type: SkillType;
  name: string;
  description: string;
  estimate: number;
}

export type { ICreateSkill };
