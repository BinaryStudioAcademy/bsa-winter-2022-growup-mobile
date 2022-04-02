import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { ILanguage } from 'src/common/types';
import { addLanguage, loadLanguages } from './actions';

interface ILanguageState {
  languages: ILanguage[];
  languagesLoading: boolean;
}

const initialState: ILanguageState = {
  languages: [],
  languagesLoading: false,
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

    builder.addMatcher(
      isAnyOf(addLanguage.pending, loadLanguages.pending),
      state => {
        state.languagesLoading = true;
      }
    );

    builder.addMatcher(
      isAnyOf(
        addLanguage.fulfilled,
        loadLanguages.fulfilled,
        addLanguage.rejected,
        loadLanguages.rejected
      ),
      state => {
        state.languagesLoading = true;
      }
    );
  },
});

export { reducer, actions };
