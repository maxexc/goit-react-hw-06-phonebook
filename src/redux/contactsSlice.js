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
          if (state.find(({ name }) => name.toLowerCase() === action.payload.name.toLowerCase())) {
            toast.error(`Name ${action.payload.name} is alredy in contacts!`, {
              position: 'top-right' });
            return;
          }
          toast.success(`${action.payload.name} successfully added in contacts.`, {
            position: 'top-right' })            
          return [action.payload, ...state];
        },
        prepare(name, number) {
          return {
            payload: {
              id: nanoid(),
              name: name,
              number: number,
            },
          };
        },
      },
      deleteContact(state, action) {
        const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
        // state.filter(contact => contact.id !== action.payload);
        // console.log(...state);
        
        toast.error(`Contact is removed from List.`, { position: 'top-right' })
        return 
      },
    },
  });
  
export const { addContact, deleteContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
  
export const getContacts = state => state.contacts;
