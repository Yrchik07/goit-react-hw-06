import Contact from './Contact/Contact';
import css from './ContactList.module.css';
const ContactList = ({ users, onDeleteUser }) => {
  console.log('onDeleteUser: ', onDeleteUser);
  console.log('users: ', users);
  return (
    <ul className={css.contactList}>
      {Array.isArray(users) &&
        users.map(user => {
          return (
            <Contact key={user.id} user={user} onDeleteUser={onDeleteUser} />
          );
        })}
    </ul>
  );
}

export default ContactList;
