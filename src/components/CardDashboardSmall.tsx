import { ThemeContext } from '@/context/themeContext'
import { memo, useContext } from 'react'

const CardDashboardSmall = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <div
        style={{
          boxShadow: `-9px 0px 18px ${theme == 'light' ? 'white' : 'red'},9px 9px 18px ${
            theme == 'light' ? 'white' : 'red'
          },`,
          background: theme == 'light' ? 'white' : 'black'
        }}
        className="h-[140px] w-[160px] sm:h-[160px] sm:w-[180px] md:w-[210px] lg:w-[230px] border rounded-3xl flex items-center justify-center px-3 py-5"
      ></div>
    </>
  )
}

export default memo(CardDashboardSmall)
