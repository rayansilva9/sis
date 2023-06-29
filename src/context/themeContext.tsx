import React, { createContext, useState, ReactNode, SetStateAction, Dispatch, useEffect } from 'react'


type ProviderProps = {
  theme: string
  changeTheme: Dispatch<SetStateAction<string>>
}
type themeProps = "light" | "dark"

type themeProviderProps = { children: ReactNode }

const DefaultValue = {
  theme: 'light',
  changeTheme: () => { }
}



export const ThemeContext = createContext<ProviderProps>(DefaultValue)

export const ThemeContextProvider: React.FC<themeProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState<themeProps>('light')

  useEffect(() => {
    window.document.getElementsByTagName('html')[0].style.background = theme == 'light' ? 'white' : 'black'
  }, [theme])

  const changeTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  return (
    <ThemeContext.Provider value={{
      theme, changeTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
};


