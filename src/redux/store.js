import { configureStore } from '@reduxjs/toolkit';
import registrationFormReducer from './slices/registrationFormSlice';

export const store = configureStore({
  reducer: {
    registrationForm: registrationFormReducer,
  },
});
