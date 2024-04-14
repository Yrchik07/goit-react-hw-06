import Contact from './Contact/Contact';
import css from './ContactList.module.css';
function ContactList({ users, onDeleteUser }) {
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
