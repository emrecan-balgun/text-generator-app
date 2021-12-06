import { configureStore } from '@reduxjs/toolkit';
import paragraphSlice from './paragraphSlice';

export const store = configureStore({
  reducer: {
    paragraph: paragraphSlice
  },
});