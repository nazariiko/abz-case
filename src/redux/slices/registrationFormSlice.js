import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registrationFormStatus: 'idle',
};

export const registrationFormSlice = createSlice({
  name: 'registrationForm',
  initialState,
  reducers: {
    changeFormStatus: (state, action) => {
      state.registrationFormStatus = action.payload;
    },
  },
});

export const { changeFormStatus } = registrationFormSlice.actions;

export default registrationFormSlice.reducer;
