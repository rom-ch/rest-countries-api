import { useState, useEffect } from "react";

function useTheme() {
  const [theme, setTheme] = useState(getPreferredTheme());

  function getPreferredTheme() {
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function handleChange() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, handleChange];
}

export default useTheme;
