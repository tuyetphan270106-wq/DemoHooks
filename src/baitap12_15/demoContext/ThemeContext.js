import React, { createContext, useContext, useState } from 'react'

const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#61dafb"
    }
};
const ThemeContext = createContext();
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <ThemeContext.Provider value={{
            theme: themes[theme],
            toggleTheme
        }}>{children}</ThemeContext.Provider>
    )
}
function useTheme() {
    return useContext(ThemeContext);
}
export { ThemeProvider, useTheme };