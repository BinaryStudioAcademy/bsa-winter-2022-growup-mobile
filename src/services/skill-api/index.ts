import { ApiPath, ContentType, HttpMethod } from 'src/common/enums';
import { ICreateSkillPayload, ISkill } from 'src/common/types';
import { Http } from '../http';

type Constructor = {
  http: Http;
  apiPath: string;
};

class SkillApi {
  #http: Http;
  #apiPath: string;

  constructor({ http, apiPath }: Constructor) {
    this.#http = http;
    this.#apiPath = apiPath;
  }

  public async create(payload: ICreateSkillPayload): Promise<ISkill> {
    const response: { skills: ISkill[] } = await this.#http.load(
      `${this.#apiPath}${ApiPath.SKILLS}`,
      {
        method: HttpMethod.POST,
        contentType: ContentType.JSON,
        payload: JSON.stringify([payload]),
      }
    );
    return response.skills[0] as ISkill;
  }

  public async loadSkills() {
    return await this.#http.load(`${this.#apiPath}${ApiPath.SKILLS}`);
  }
}

export { SkillApi };
