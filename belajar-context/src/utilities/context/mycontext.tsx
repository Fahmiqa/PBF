import { createContext } from "react";
import { themes } from "../themes/mythemes";

export const LevelContext = createContext(1);

export const ThemeContext = createContext({
    theme: themes.light,
    toogleTheme: () => {},
});
