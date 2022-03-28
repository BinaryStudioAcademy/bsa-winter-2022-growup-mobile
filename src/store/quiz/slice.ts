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
  quizResults?: IQuizResult[];
  quizResultsLoading: boolean;
}

const initialState: IQuizState = {
  quizQuestions: [],
  quizResultsLoading: false,
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

    builder.addCase(sendQuizResults.pending, state => {
      state.quizResultsLoading = true;
    });

    builder.addCase(loadQuizResults.pending, state => {
      state.quizResultsLoading = true;
    });

    builder.addCase(sendQuizResults.fulfilled, (state, { payload }) => {
      state.quizResultsLoading = false;
      state.quizResults = payload;
    });

    builder.addCase(loadQuizResults.fulfilled, (state, { payload }) => {
      state.quizResultsLoading = false;
      state.quizResults = payload;
    });

    builder.addCase(saveQuizAnswers, (state, { payload }) => {
      const { questionId, answerIndex, prevAnswerIndex } = payload;

      const questionIndex = state.quizQuestions.findIndex(
        item => item.id === questionId
      );

      state.quizQuestions[questionIndex].answers[+prevAnswerIndex].isSelected =
        false;

      state.quizQuestions[questionIndex].answers[+answerIndex].isSelected =
        true;
    });
  },
});

export { reducer, actions };
