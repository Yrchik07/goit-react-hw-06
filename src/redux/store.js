import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
import { filtersReducer } from './filtersSlice';
  
  const contactsPersistConfig = {
    key: "contacts",
    storage,
  };

  
  const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filtersReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: 
       {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
