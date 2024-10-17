import { useRef } from "react";
import PropTypes from "prop-types";
import { IoMdSearch } from "react-icons/io";
import styles from "./InputField.module.css";

function InputField({ handleSearch, search }) {
  const inputRef = useRef();

  function handleSearchClick() {
    inputRef.current?.focus();
  }

  return (
    <div className={styles.search}>
      <IoMdSearch onClick={handleSearchClick} />
      <input
        ref={inputRef}
        value={search}
        onChange={e => handleSearch(e.target.value)}
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
}

InputField.propTypes = {
  search: PropTypes.string,
  handleSearch: PropTypes.func,
};

export default InputField;
