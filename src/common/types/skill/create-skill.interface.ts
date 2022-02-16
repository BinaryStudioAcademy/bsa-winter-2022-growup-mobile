import { SkillType } from 'src/common/enums';

interface ICreateSkillPayload {
  type: SkillType;
  name: string;
  description: string;
  estimate: number;
}

export type { ICreateSkillPayload };
