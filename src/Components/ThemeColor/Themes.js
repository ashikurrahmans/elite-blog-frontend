import { useEffect, useState } from "react";
const Themes = () => {
  const [theme, setTheme] = useState("dark");
  const colorTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
  }, [theme]);
  return [colorTheme, setTheme];
};

export default Themes;
