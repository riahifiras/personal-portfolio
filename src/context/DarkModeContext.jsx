import { createContext, useState } from 'react';

export const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
}

