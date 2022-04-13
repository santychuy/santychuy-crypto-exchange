import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './slices/account';
import tokensReducer from './slices/tokens';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    tokens: tokensReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
