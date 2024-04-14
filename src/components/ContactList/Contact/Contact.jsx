import css from '../Contact/Contact.module.css';

function Contact({ user, onDeleteUser }) {
  return (
    <>
      <li className={css.contactItemBox}>
        <section className={css.contactItem}>
          <p>👤 {user.name}</p>
          <p>📞 {user.number}</p>
        </section>
        <section className={css.contactButtonDelete}>
          <button
            className={css.buttonDelete}
            type="button"
            onClick={() => onDeleteUser(user.id)}
          >
            Delete
          </button>
        </section>
      </li>
    </>
  );
}

export default Contact;
