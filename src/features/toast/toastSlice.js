import { createSlice } from '@reduxjs/toolkit';
import { generateRandomChars } from '../../app/services/utils';

const initialState = {
    toasts: []
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addToast: (state, action) => {
        if(state.toasts.length <= 4) {
            state.toasts.push({...action.payload, id: generateRandomChars()});
        }
    },
    removeToast: (state, action) => {
        const index = state.toasts.findIndex(toast => toast.id === action.payload);
        if(index > -1) {
            state.toasts.splice(index, 1);
        }
      },
  },

});

export const { addToast, removeToast } = toastSlice.actions;

export const selectToasts = (state) => state.toast.toasts;

export default toastSlice.reducer;
