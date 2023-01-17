import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import  ContactsData from 'components/ContactsData.json'
import { toast } from "react-toastify";



export const contactsSlise = createSlice({
    name: 'contacts',
    initialState: ContactsData,
    reducers: {
      addContact: {
        reducer(state, action) {
          if (state.find(({ name }) => name === action.payload.name)) {
            toast.error(`Name ${action.payload.name} is alredy in contacts!`, {
              position: 'top-right',
            });
            return;
          }
  
          if (state.find(({ number }) => number === action.payload.number)) {
            toast.error(
              `Number ${action.payload.number} is alredy in contacts!`,
              {
                position: 'top-right',
              }
            );
            return;
          }
          return [...state, action.payload];
        },
        prepare(obj) {
          return {
            payload: {
              id: nanoid(),
              name: obj.name,
              number: obj.number,
            },
          };
        },
      },
      deleteContact(state, action) {
        return state.filter(item => item.id !== action.payload);
      },
    },
  });
  
  export const { addContact, deleteContact } = contactsSlise.actions;
  export const contactsReducer = contactsSlise.reducer;