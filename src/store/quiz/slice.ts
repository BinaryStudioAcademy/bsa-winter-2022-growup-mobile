import { createSlice } from '@reduxjs/toolkit';

import { IQuizQuestion, IQuizResult } from 'src/common/types';
import { loadQuizQuestions, sendQuizResults, loadQuizResults } from './actions';

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
      state.quizQuestions = payload;
    });
    builder.addCase(sendQuizResults.fulfilled, (state, { payload }) => {
      state.quizResults = payload;
    });
    builder.addCase(loadQuizResults.fulfilled, (state, { payload }) => {
      state.quizResults = payload;
    });
  },
});

export { reducer, actions };
