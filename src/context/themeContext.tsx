import React, { createContext, useState, ReactNode, SetStateAction, Dispatch, useEffect } from 'react'


type ProviderProps = {
  theme: string
  changeTheme: Dispatch<SetStateAction<string>>
}
type themeProps = "light" | "dark"

export const ThemeContext = createContext<ProviderProps | null>(null)

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {

  const [theme, setTheme] = useState<themeProps>('dark')

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


