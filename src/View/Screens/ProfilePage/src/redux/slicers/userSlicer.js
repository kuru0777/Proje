import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    deleteUser: state => {
      state.user = null;
    },
  },
});

export const {setUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;
