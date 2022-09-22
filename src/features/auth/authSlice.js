import { createSlice } from '@reduxjs/toolkit';
import StorageService from '../../app/services/storage';

const initialState = {
    userInfos: StorageService().get().userInfos
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfos: (state, action) => {
      StorageService().set("userInfos", action.payload);
      state.userInfos = action.payload;
    },
    unsetUserInfos: state => {
        StorageService().set("userInfos", null);
        state.userInfos = null;
      },
  },

});

export const { setUserInfos, unsetUserInfos } = authSlice.actions;

export const selectUserInfos = (state) => state.auth.userInfos;

export default authSlice.reducer;
