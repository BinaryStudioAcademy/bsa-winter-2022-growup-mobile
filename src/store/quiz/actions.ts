import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import { IQuizQuestion, IQuizSaveAnswerPayload } from 'src/common/types';
import { quizApi } from 'src/services';
import { ActionTypes } from './common';

const loadQuizQuestions = createAsyncThunk(
  ActionTypes.LOAD_QUIZ_QUESTIONS,
  async () => {
    const quizQuestions = await quizApi.loadQuizQuestions();
    return quizQuestions;
  }
);

const sendQuizResults = createAsyncThunk(
  ActionTypes.SEND_QUIZ_RESULTS,
  async (payload: IQuizQuestion[]) => {
    await quizApi.sendQuizResults(payload);
    const quizResults = await quizApi.loadQuizResults();
    return quizResults;
  }
);

const loadQuizResults = createAsyncThunk(
  ActionTypes.LOAD_QUIZ_RESULTS,
  async () => {
    const quizResults = await quizApi.loadQuizResults();
    return quizResults;
  }
);

const saveQuizAnswers = createAction<IQuizSaveAnswerPayload>(
  ActionTypes.SAVE_QUIZ_ANSWERS
);

export { loadQuizQuestions, sendQuizResults, loadQuizResults, saveQuizAnswers };
