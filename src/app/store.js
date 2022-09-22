import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import basketReducer from '../features/basket/basketSlice';
import authReducer from '../features/auth/authSlice';
import toastReducer from '../features/toast/toastSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    auth: authReducer,
    toast: toastReducer
  },
});
