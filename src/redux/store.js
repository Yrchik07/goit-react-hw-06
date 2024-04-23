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
import { filterReducer } from './filtersSlice';
  
  const contactsPersistConfig = {
    key: "contacts",
    storage,
    whitelist: ["contacts"],
  };

  const filterPersistConfig = {
    key: "filters",
    storage,
    whitelist: ["name"],
  };
  
  const rootReducer = {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
    filters: persistReducer(filterPersistConfig, filterReducer),
  };

export const store = configureStore({
    reducer:rootReducer,
    // {
    // contacts: persistReducer(contactsPeristConfig, contactsReducer),
    // },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
