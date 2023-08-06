import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];

const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      let {category} = action.payload;
      state[category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      let {category, id} = action.payload;
      let newArr = state[category].filter(transaction => transaction.id !== id);
      state[category] = newArr;
    }
  }
})


export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

