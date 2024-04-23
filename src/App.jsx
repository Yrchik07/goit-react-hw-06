import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact,deleteContact } from './redux/contactsSlice';
import { changeFilter } from './redux/filtersSlice';

function App() {

  const dispatch = useDispatch();
  const users = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filters.name);

  const onAddUser = formData => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addContact(finalContact));
  };

  const onDeleteUser = contactId => {
    dispatch(deleteContact(contactId));
  };

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  const filteredUsers = users.filter((user) =>
  user.name && user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebooks</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox
       onChangeFilter={onChangeFilter}
        filter={filter}
         />
      <ContactList
       users={filteredUsers}
        onDeleteUser={onDeleteUser}
         />
    </div>
  );
}

export default App;
