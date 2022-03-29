import { createSlice } from '@reduxjs/toolkit';

import { ILanguage } from 'src/common/types';
import { addLanguage, loadLanguages } from './actions';

interface ILanguageState {
  languages: ILanguage[];
}

const initialState: ILanguageState = {
  languages: [],
};

const { reducer, actions } = createSlice({
  name: 'language',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addLanguage.fulfilled, (state, { payload }) => {
      state.languages.push(payload);
    });
    builder.addCase(loadLanguages.fulfilled, (state, { payload }) => {
      state.languages = payload;
    });
  },
});

export { reducer, actions };
