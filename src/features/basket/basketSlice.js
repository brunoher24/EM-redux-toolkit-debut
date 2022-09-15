import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.products.push(action.payload);
    },
    deleteOneItem: (state, action) => {
      state.products = state.products.filter(product => product.id != action.payload);
    },
    deleteAll: (state) => {
      state.products = [];
    }

  },

});

export const { addItem, deleteOneItem, deleteAll } = basketSlice.actions;

export const selectBasket = (state) => state.basket.products;

export default basketSlice.reducer;
