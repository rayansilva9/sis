import React, {
  createContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
  useEffect
} from 'react'

type ProviderProps = {
  theme: string
  changeTheme: Dispatch<SetStateAction<themeProps>>
}
type themeProps = 'light' | 'dark'

type themeProviderProps = { children: ReactNode }

const DefaultValue = {
  theme: 'light',
  changeTheme: () => { }
}

export const ThemeContext = createContext<ProviderProps>(DefaultValue)

export const ThemeContextProvider: React.FC<themeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<themeProps>('light')

  useEffect(() => {
    window.document.getElementsByTagName('html')[0].style.background =
      theme == 'light' ? 'white' : 'black'

    const ToolBarGrid = window.document.querySelector('.MuiToolbar-root')! as HTMLElement
    ToolBarGrid ? (ToolBarGrid.style.color = theme == 'light' ? 'black' : 'white') : null

    const ToolBarGridIconPaginatio = window.document.querySelector(
      '[data-testid="ArrowDropDownIcon"]'
    )! as HTMLElement
    ToolBarGridIconPaginatio
      ? (ToolBarGridIconPaginatio.style.color = theme == 'light' ? 'black' : '#ccc')
      : null

    const ToolBarGridIconHeader = window.document.querySelectorAll(
      '[data-testid="TripleDotsVerticalIcon"]'
    )! as unknown as HTMLElement[]

    for (let index = 0; index < ToolBarGridIconHeader.length; index++) {
      ToolBarGridIconHeader[index].style.color = theme == 'light' ? 'black' : '#ccc'
    }


  }, [theme])

  const changeTheme = () => {
    if (theme == 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
