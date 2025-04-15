import { useState, useEffect} from 'react'
import { SearchBox } from '../SearchBox/SearchBox';
import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import './App.css'
import * as Yup from "yup";







function App() {
  const CONTACTSBOOK = "contactList";
  const [contacts, setContacts] = useState(() => {
    if(JSON.parse(localStorage.getItem(CONTACTSBOOK)) !== null){
      return JSON.parse(localStorage.getItem(CONTACTSBOOK))
    }
    return [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]})
  

  const [contact, setContact] = useState("")

  

  const initValues = {username: "", phone: ""}

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string().min(4, "Too Short!").max(50, "Too Long!").required("Required")
  });
  
  useEffect(() => {
    localStorage.setItem(CONTACTSBOOK, JSON.stringify(contacts));

  }, [contacts]);



  const search = (evt) => {
    setContact(evt.target.value)
  }

  const createNewContact = (evt, actions) => {
    const contact = {id: crypto.randomUUID(), name: evt.username, number: evt.phone}
    setContacts((prev) => [...prev, contact])
    actions.resetForm();
    evt.username.value = ""
    evt.phone.value = ""
  }
  
  const filteredContacts = contacts.filter((cont) =>
    cont.name.toLowerCase().includes(contact.toLowerCase())
  );

  const deleteContact = (evt) => {
    setContacts(prev => prev.filter(contact => contact.id !== evt.target.id));
  };
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm initialValues={initValues} validation={FeedbackSchema} onCreate={createNewContact} />
      <SearchBox onChange={search} />
      <ContactList contactsData={filteredContacts} onSubmit={deleteContact}/>
    </div>
  );
}

export default App
