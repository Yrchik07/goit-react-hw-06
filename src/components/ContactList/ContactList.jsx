import { useSelector } from 'react-redux';
import Contact from './Contact/Contact';
import css from './ContactList.module.css';
import { selectContacts, selectNameFilter } from '../../redux/selectors';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const query = useSelector(selectNameFilter);
  const contactsData = contacts.filter(({ name }) =>
    name.toLowerCase().includes(query.toLowerCase()),
  );
  console.log('contactsData: ', contactsData);

  return (
    <ul className={css.contactList}>
      {Array.isArray(contactsData) &&
        contactsData.map(contact => (
            <Contact key={contact.id} contact={contact}/>
        ))}
    </ul>
  );
}
