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
      const { id, name, level, certificate } = payload[0];
      state.languages.push({ id, name, level, certificate });
    });
    builder.addCase(loadLanguages.fulfilled, (state, { payload }) => {
      state.languages = payload;
    });
  },
});

export { reducer, actions };
