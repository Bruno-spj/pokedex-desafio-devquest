/* eslint-disable react/prop-types */

import { createContext, useState } from "react";

export const themes = {
  light: {
    color: '#000',
    background: ' #cee7f5'
  },
  dark: {
    color: '#fff',
    background: '#000'
  }
}

export const ThemeContext = createContext({})

export const CustomThemeProvider = (props) => {

  const [theme, setTheme] = useState(themes.light)
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}