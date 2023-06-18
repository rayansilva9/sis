import Image from 'next/image'
import { Roboto_Condensed } from 'next/font/google'
import CardDashboardSmall from '@/components/CardDashboardSmall'
import CardDashboardLarge from '@/components/CardDashboardLarge'
import CardDashboardXL from '@/components/CardDashboardXl'


export default function Home() {
  return (
    <>
      <div style={{ width: 'calc(100vw - 250px) ', height: '100vh', }} className='ml-[250px] py-2 px-4'>
        <div className='w-full flex gap-5'>
          <CardDashboardSmall />
          <CardDashboardSmall />
          <CardDashboardSmall />
          <CardDashboardSmall />
        </div>
        <div className='w-full mt-5 flex gap-5'>
          <div className='flex flex-col gap-5'>
            <CardDashboardLarge />
            <CardDashboardLarge />
          </div>
          <div>
            <CardDashboardXL />
          </div>
        </div>
      </div>
    </>
  )
}
