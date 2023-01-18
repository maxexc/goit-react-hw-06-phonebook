import { Contacts } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import React, { useEffect } from 'react'
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilterResults } from 'redux/filterSlice';
import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';


const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterResults);
  const dispatch = useDispatch();
  console.log(contacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const formSubmitHandler = event => { 
    dispatch(addContact(event.name, event.number));
  }
  
  const handleDelete = item => {
    console.log(item);
    dispatch(deleteContact(item));    
   }

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value))
  };  
  
const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();   

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  }  
    
    return (
      <Container>
        <PhonebookForm onSubmit={formSubmitHandler} />
        <Filter
          value={filter}
          onFilter={changeFilter} />
        <Contacts
          contactsFiltred={getVisibleContacts()}
          handleDelete={handleDelete}
        ></Contacts>
        <ToastContainer autoClose={2000} position="top-right" theme="light" />
      </Container>
  )
}

export default App
