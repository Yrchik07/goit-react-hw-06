import css from '../SearchBox/SearchBox.module.css';

function SearchBox({ onChangeFilter, filter }) {
  return (
    <section className={css.serchBox}>
      <span>Find contacts by name</span>
      <br />
      <input
        type="text"
        placeholder="Search..."
        value={filter}
        onChange={onChangeFilter}
      />
    </section>
  );
}

export default SearchBox;
