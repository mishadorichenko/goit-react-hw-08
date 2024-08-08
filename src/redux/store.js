import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import filterReducer from './filters/slice';
import authReducer from './auth/slice';

const ConfigAuthReducer = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistAuthReducer = persistReducer(ConfigAuthReducer, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
    auth: persistAuthReducer,
  },
  /* обов'язково шоб ігнорувати помилки */
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
