const THEME_KEY = "theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const themeManager = {
  setTheme: (theme) => {
    localStorage.setItem(THEME_KEY, theme);
    themeManager.applyTheme()
  },
  getTheme: () => {
    console.log(localStorage.getItem(THEME_KEY))
    return localStorage.getItem(THEME_KEY);
  },
  applyTheme: () => {
    const storedTheme = themeManager.getTheme();
    let preferredTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? DARK_THEME
      : LIGHT_THEME;

    const curTheme = storedTheme ? storedTheme : preferredTheme;

    document.documentElement.classList.toggle("dark", curTheme === DARK_THEME);
  },

  switchTheme: () => {
    const curTheme = themeManager.getTheme();

    if (curTheme === LIGHT_THEME) {
      themeManager.setTheme(DARK_THEME);
    } else {
      themeManager.setTheme(LIGHT_THEME);
    }
  },
};

export default themeManager;
