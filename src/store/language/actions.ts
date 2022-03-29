import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAddLanguagePayload } from 'src/common/types';
import { languageApi } from 'src/services';
import { ActionTypes } from './common';

const loadLanguages = createAsyncThunk(ActionTypes.LOAD_LANGUAGE, async () => {
  const languages = await languageApi.loadLanguages();
  return languages;
});

const addLanguage = createAsyncThunk(
  ActionTypes.ADD_LANGUAGE,
  async (payload: IAddLanguagePayload) => {
    const language = await languageApi.addLanguage(payload);
    return language;
  }
);

export { loadLanguages, addLanguage };
