import { Contacts } from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
// import React, { useState, useEffect } from 'react'
import React, { useEffect } from 'react'
import { Container } from './App.styled';
// import  ContactsData from 'components/ContactsData.json'
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, getFilterResults } from 'redux/filterSlice';
import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';




// const GET_LS_CONTACTS = JSON.parse(window.localStorage.getItem('contacts'));
// можно писать и localStorage.setItem без window - но неявное указание!

const App = () => {
  const contacts = useSelector(getContacts);
  // const [contacts, setContacts] = useState(GET_LS_CONTACTS ?? ContactsData);
  const filter = useSelector(getFilterResults);
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState('');
  console.log(contacts);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

  const formSubmitHandler = event => { 
    dispatch(addContact(event.name, event.number));
  }

  //   const newContact = {
  //     id: event.id,
  //     name: event.name,
  //     number: event.number,
  //   };
  //   const contactsLists = [...contacts];
  //   // console.log(event);

  //   if (
  //     contactsLists.find(
  //       contacts => newContact.name.toLowerCase() === contacts.name.toLowerCase()
  //     )) {
  //       toast.warning(`${newContact.name} is already in contacts.`);
  //     return;
  //   } 
    
  //   setContacts(state => [ newContact, ...state]);
  //   console.log("contactsLists: ", contactsLists);
  //   toast.success(`${newContact.name} successfully added in contacts.`)
  // }

  
  const handleDelete = selectedId => {
    dispatch(deleteContact);
   }

  //   setContacts(
  //     contacts.filter(contact => contact.id !== selectedId),
  //     toast.error(`Contact is removed from List.`)
  //   );
  // };

  const changeFilter = event => {
    dispatch(filterContacts(event.currentTarget.value))
    // setFilter(event.currentTarget.value);
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
