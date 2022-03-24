import { IQuizAnswer } from './quiz-answer.interface';

interface IQuizQuestion {
  id: string;
  question: string;
  answers: IQuizAnswer[];
}

export type { IQuizQuestion };
