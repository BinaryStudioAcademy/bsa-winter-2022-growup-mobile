import { SkillType } from 'src/common/enums';

interface ISkill {
  id: string;
  type: SkillType;
  name: string;
  description?: string;
  estimate: number;
}

export type { ISkill };
