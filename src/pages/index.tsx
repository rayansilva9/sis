import CardDashboardLarge from '@/components/CardDashboardLarge'
import CardDashboardSmall from '@/components/CardDashboardSmall'
import CardDashboardXl from '@/components/CardDashboardXl'
import { ThemeContext } from '@/context/themeContext'
import { useContext } from 'react'

export default function Home() {


  const { theme, changeTheme } = useContext(ThemeContext)



  return (
    <>
      <div
        style={{ background: theme == 'light' ? 'white' : 'black', }}
        className='h-auto w-screen md:pl-[130px] lg:pl-[300px] px-3 pb-14 flex flex-col sm:flex-row md:flex-col md:gap-5 '>
        <div className=' w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-80px)] flex flex-wrap items-center justify-center md:justify-between lg:justify-between gap-5 py-6'>
          <CardDashboardSmall />
          <CardDashboardSmall />
          <CardDashboardSmall />
          <CardDashboardSmall />
        </div>
        <div className="w-fullmt-5 flex flex-col md:flex-col lg:flex-row lg:gap-0 md:justify-between lg:justify-normal">
          <div className="flex flex-col gap-5">
            <CardDashboardLarge />
            <CardDashboardLarge />
          </div>
          <div>
            <CardDashboardXl />
          </div>
        </div>
      </div>
    </>
  )
}

