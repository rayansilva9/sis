import { ThemeContext } from '@/context/themeContext'
import React, { useContext } from 'react'

const ToggleTheme: React.FC = () => {
  const { theme, changeTheme } = useContext(ThemeContext)

  return (
    <>
      <label className="switch absolute bottom-5">
        <input
          onClick={() => {
            theme == 'light' ? changeTheme('dark') : changeTheme('light')
          }}
          defaultChecked={theme == 'light' ? true : false}
          type="checkbox"
        />
        <span className="slider"></span>
      </label>
    </>
  )
}

export default ToggleTheme
 