import React from 'react'
import { useTheme } from './ThemeContext';

function Theme() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div
            style={{
                backgroundColor: theme.background,
                color: theme.foreground,
                padding: "30px"
            }}
        >
            <h2>Theme Example</h2>

            <button
                onClick={toggleTheme}
                style={{
                    backgroundColor: theme.background,
                    color: theme.foreground,
                    padding: "10px 20px",
                    border: "1px solid",
                    cursor: "pointer"
                }}
            >
                Change Theme
            </button>
        </div>
    );
}

export default Theme
