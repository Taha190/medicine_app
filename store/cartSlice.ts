import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      return [...state, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.findIndex((data) => data.Slug === action.payload);
      if (indexToRemove !== -1) {
        return [...state.slice(0, indexToRemove), ...state.slice(indexToRemove + 1)];
      } else {
        return state;
      }
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
