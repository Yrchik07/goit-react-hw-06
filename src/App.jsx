import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import ContactUsers from './contact.json';
import { nanoid } from 'nanoid';

function App() {
  const [users, setUsers] = useState(() => {
    const stringifiedUsers = localStorage.getItem('users');
    if (!stringifiedUsers) return ContactUsers;
    const parsedUsers = JSON.parse(stringifiedUsers);
    return parsedUsers;
  });

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const onAddUser = formData => {
    const finalUser = {
      ...formData,
      id: nanoid(),
    };
    setUsers(prevState => [...prevState, finalUser]);
  };
  const onDeleteUser = userId => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
  };
  const [filter, setFilter] = useState('');

  const onChangeFilter = event => {
    setFilter(event.target.value);
  };
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddUser={onAddUser} />
      <SearchBox onChangeFilter={onChangeFilter} filter={filter} />
      <ContactList users={filteredUsers} onDeleteUser={onDeleteUser} />
    </div>
  );
}

export default App;
