import {configureStore} from '@reduxjs/toolkit';
import userSlicer from './slicers/userSlicer';

export const store = configureStore({
  reducer: {
    user: userSlicer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: true,
    }),
});
