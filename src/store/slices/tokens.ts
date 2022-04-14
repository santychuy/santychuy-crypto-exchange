import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Token = {
  symbol: string;
  value?: number;
  balance?: number;
  price: number;
};

export interface TokensState {
  tokenUp: Token;
  tokenDown: Token;
}

const initialState: TokensState = {
  tokenUp: {
    symbol: 'ETH',
    balance: undefined,
    value: undefined,
    price: 3000,
  },
  tokenDown: {
    symbol: 'SCHY',
    balance: undefined,
    value: undefined,
    price: 3.29,
  },
};

export const tokensSlice = createSlice({
  name: 'tokens',
  initialState,
  reducers: {
    swapToken: (state) => {
      const { tokenDown, tokenUp } = state;

      state.tokenUp = tokenDown;
      state.tokenDown = tokenUp;
    },
    setTokenUp: (state, action: PayloadAction<Token>) => {
      state.tokenUp = action.payload;
    },
    setTokenDown: (state, action: PayloadAction<Token>) => {
      state.tokenDown = action.payload;
    },
  },
});

export const { swapToken, setTokenDown, setTokenUp } = tokensSlice.actions;

export default tokensSlice.reducer;
