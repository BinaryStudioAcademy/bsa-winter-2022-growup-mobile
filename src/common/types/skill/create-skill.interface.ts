import { SkillType } from 'src/common/enums';

interface ICreateSkillPayload {
  type: SkillType;
  name: string;
}

export type { ICreateSkillPayload };
