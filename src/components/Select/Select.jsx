import { useState } from "react";
import PropTypes from "prop-types";
import { FaCaretDown } from "react-icons/fa";
import styles from "./Select.module.css";

function Select({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  function selectOption(option) {
    onChange(option);
  }

  return (
    <div
      onBlur={() => setIsOpen(false)}
      onClick={() => setIsOpen(prev => !prev)}
      tabIndex={0}
      className={styles.container}
    >
      <span className={styles.value}>{value.label}</span>

      <div className={styles.caret}>
        <FaCaretDown />
      </div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => (
          <li
            onClick={e => {
              e.stopPropagation();
              selectOption(option);
              setIsOpen(false);
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={option.value}
            className={`${styles.option}  ${
              index === highlightedIndex ? styles.highlighted : ""
            }`}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

Select.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

export default Select;
