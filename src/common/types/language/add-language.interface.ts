import { ILanguage } from './language.interface';

type IAddLanguagePayload = Omit<ILanguage, 'id'>;

export type { IAddLanguagePayload };
