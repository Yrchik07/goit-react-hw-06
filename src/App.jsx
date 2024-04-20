// import { useMemo} from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const users = useSelector((state)=>state.contacts.items);
  // const filter = useSelector((state)=>state.contacts.filters);
  
  const onAddUser = (formData) => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    const action = {
      type: 'contacts/add',
      payload: finalUser,}
    dispatch(action);
  };

  const onDeleteUser = (userId) => {
    const action = {
      type: 'contacts/delete',
      payload: userId,}
    dispatch(action);
  };

  const onChangeFilter = (event) => {
    const action = {
      type: 'contacts/filter',
      payload: event.target.value,}
      dispatch(action);
    }

    // const filteredUsers = users.filter((user) =>
    //   user.name.toLowerCase().includes(filter.toLowerCase())
    // );
    
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox 
     onChangeFilter={onChangeFilter}
      // filter={filter} 
      />
      <ContactList
      //  users={filteredUsers} 
       onDeleteUser={onDeleteUser} />
      </div>
  );
}

export default App;
