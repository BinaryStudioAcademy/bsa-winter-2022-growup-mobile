import { store } from 'src/store';

export type RootState = ReturnType<typeof store.getState>;
