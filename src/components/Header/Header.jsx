import { Link } from "react-router-dom";
import useTheme from "../../hooks/useTheme";
import { FaMoon, FaRegMoon } from "react-icons/fa6";
import styles from "./Header.module.css";

function Header() {
  const [theme, handleChange] = useTheme();

  return (
    <header className={styles.header}>
      <Link to="/">
        <h1>Where in the world?</h1>
      </Link>
      <label className={styles.label}>
        <div>
          {theme === "dark" ? <FaMoon /> : <FaRegMoon />}
          <span>Dark Mode</span>
        </div>
        <input
          onChange={handleChange}
          checked={theme === "dark"}
          type="checkbox"
        />
      </label>
    </header>
  );
}

export default Header;
