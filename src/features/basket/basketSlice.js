import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalAmount: 0
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const {id, quantity} = action.payload;
      const newProduct = {id: parseInt(id), quantity: parseInt(quantity)}
      const exsistingIndex = state.products.findIndex(product => product.id === newProduct.id);
      if(exsistingIndex > - 1) {
        state.products.splice(exsistingIndex, 1, newProduct);
      } else {
        state.products.push(newProduct);
      }
    },
    deleteOneItem: (state, action) => {
      const id = parseInt(action.payload);
      const index = state.products.findIndex(product => product.id === id);
      const product = state.products[index];
      // console.log((state.totalAmount - product.price * product.quantity));
      state.totalAmount = Math.round((state.totalAmount - product.price * product.quantity) * 100) / 100;
      state.products.splice(index, 1);
      
    },
    deleteAll: (state) => {
      state.products = [];
    },
    incrementQuantity: (state, action) => {
      const id = parseInt(action.payload);
      state.products = state.products.map((product, i) => {
        if(product.id === id && product.quantity < 10) {
          product.quantity ++;
          state.totalAmount = Math.round((state.totalAmount + product.price) * 100) / 100;
        }
        return product;
        // return product.id != id ? product : {...product, quantity: product.quantity+1}
      })
    },
    decrementQuantity: (state, action) => {
      const id = parseInt(action.payload);
      state.products = state.products.map((product, i) => {
        if(product.id === id && product.quantity > 1) {
          product.quantity --;
          state.totalAmount = Math.round((state.totalAmount - product.price) * 100) / 100;
        }
        return product;
        // return product.id != id ? product : {...product, quantity: product.quantity-1}
      })
    },
    setProductsPrice: (state, action) => {
      const productsWithPrice = [...state.products];
      action.payload.products.forEach(product => {
        const index = productsWithPrice.findIndex(item => item.id === parseInt(product.id));
        if (index > -1) {
          productsWithPrice[index].price = Number(product.price);
        }  
      })
      state.products = productsWithPrice;
    },
    setTotalAmount: state => {
      state.totalAmount = Math.round(state.products
        .map(({price, quantity}) => price * quantity)
        .reduce((a,b) => a + b, 0) * 100) / 100;
    }
  },

});

export const { 
  addItem, 
  deleteOneItem, 
  deleteAll, 
  incrementQuantity, 
  decrementQuantity, 
  setProductsPrice,
  setTotalAmount
} = basketSlice.actions;

export const selectBasket = (state) => state.basket.products;
export const selectTotalAmount = (state) => state.basket.totalAmount;


export default basketSlice.reducer;
