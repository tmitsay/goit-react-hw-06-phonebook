import { createSlice, nanoid } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const initialState = {
   items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
],
};

const phoneContactsSlice = createSlice(
    {
        name: 'contacts',
        initialState,
        reducers: {
            addContact: {
                reducer: (state, action) => {
                    // state.items = [...state.items, action.payload];
                    state.items.push(action.payload)
                },
            },
            prepare: (name, number) => {
                return {
                    payload: {
                        id: nanoid(),
                        name: name.trim(),
                        number: number.trim()
                    },
                };
            },
            deleteContact: (state, action) => {
                state.items = state.items.filter(item => item.id !== action.payload)
            },
        },
    });

const persistConfig = {
    key: 'items',
    storage,
}
    
export const { addContact, deleteContact } = phoneContactsSlice.actions;
export const contactsReducer = phoneContactsSlice.reducer;

export const persistedContactReducer = persistReducer(
    persistConfig,
    phoneContactsSlice.reducer
)