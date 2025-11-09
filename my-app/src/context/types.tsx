export interface ITheme {
  mode: "light" | "dark";
}

export interface IThemeContext {
  theme: ITheme;
  setTheme: (theme: ITheme) => void;
}
