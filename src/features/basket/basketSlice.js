import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const exsistingIndex = state.products.findIndex(product => product.id == action.payload.id);
      if(exsistingIndex > - 1) {
        state.products.splice(exsistingIndex, 1, action.payload);
      } else {
        state.products.push(action.payload);
      }
    },
    deleteOneItem: (state, action) => {
      state.products = state.products.filter(product => product.id != action.payload);
    },
    deleteAll: (state) => {
      state.products = [];
    },
    incrementQuantity: (state, action) => {
      state.products = state.products.map(product => {
        if(product.id == action.payload) {
          product.quantity ++;
        }
        return product;
        // return product.id != action.payload ? product : {...product, quantity: product.quantity+1}
      })
    },
    decrementQuantity: (state, action) => {
      state.products = state.products.map(product => {
        if(product.id == action.payload) {
          product.quantity --;
        }
        return product;
        // return product.id != action.payload ? product : {...product, quantity: product.quantity-1}
      })
    }

  },

});

export const { addItem, deleteOneItem, deleteAll, incrementQuantity, decrementQuantity } = basketSlice.actions;

export const selectBasket = (state) => state.basket.products;

export default basketSlice.reducer;
