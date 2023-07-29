import { configureStore } from '@reduxjs/toolkit';

import todo from './todo/slice';
import calculate from './calculate/slice';
import passGen from './passGenSlice/slice';

export const store = configureStore({
  reducer: {
    todo,
    calculate,
    passGen,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
