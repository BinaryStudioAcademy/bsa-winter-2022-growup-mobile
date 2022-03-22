import { createSlice } from '@reduxjs/toolkit';

import { IQuizQuestion, IQuizResult } from 'src/common/types';
import {
  loadQuizQuestions,
  sendQuizResults,
  loadQuizResults,
  saveQuizAnswers,
} from './actions';

interface IQuizState {
  quizQuestions: IQuizQuestion[];
  quizResults: IQuizResult[];
}

const initialState: IQuizState = {
  quizQuestions: [],
  quizResults: [],
};

const { reducer, actions } = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadQuizQuestions.fulfilled, (state, { payload }) => {
      const quizQuestionsWithAnswerFields = payload.map(question => ({
        ...question,
        answers: question.answers.map((answer, index) => ({
          ...answer,
          isSelected: index === 0 ? true : false,
        })),
      }));

      state.quizQuestions = quizQuestionsWithAnswerFields;
    });
    builder.addCase(sendQuizResults.fulfilled, (state, { payload }) => {
      state.quizResults = payload;
    });
    builder.addCase(loadQuizResults.fulfilled, (state, { payload }) => {
      state.quizResults = payload;
    });
    builder.addCase(saveQuizAnswers, (state, { payload }) => {
      const { questionId, answerId, prevAnswerId } = payload;
      const questionIndex = state.quizQuestions.findIndex(
        item => item.id === questionId
      );
      state.quizQuestions[questionIndex].answers[+prevAnswerId].isSelected =
        false;
      state.quizQuestions[questionIndex].answers[+answerId].isSelected = true;
    });
  },
});

export { reducer, actions };
