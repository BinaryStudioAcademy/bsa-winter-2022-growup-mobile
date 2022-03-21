import { IQuizCategory } from './quiz-category.interface';

interface IQuizResult {
  userId: string;
  quizCategoryId: string;
  score: number;
  quizCategory: IQuizCategory;
}

export type { IQuizResult };
