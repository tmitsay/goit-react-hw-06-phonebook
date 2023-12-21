import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore, 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'


import { persistedContactReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";


export const store = configureStore(
    {
        reducer: {
            contacts: persistedContactReducer,
            filter: filterReducer,
        },

        middleware: getGetDefaultMiddleware =>
            getGetDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE]
                },
            }),

    });

export const persistor = persistStore(store);