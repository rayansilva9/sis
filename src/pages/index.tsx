import CardDashboardSmall from '@/components/CardDashboardSmall'
import CardDashboardLarge from '@/components/CardDashboardLarge'
import CardDashboardXL from '@/components/CardDashboardXl'

export default function Home() {
  return (
    <>
      <div
        className="py-2 px-4"
        style={{ width: 'calc(100vw - 250px) ', height: '100vh', marginLeft: '270px', background: '#fff', }}
      >
        <div className="w-full flex gap-5">
          <CardDashboardSmall product='XXXXX' percent={0.4} label='Mais Vendidos' />
          <CardDashboardSmall product='XXXXX' percent={3.1} label='' />
          <CardDashboardSmall product='XXXXX' percent={1.4} label='' />
          <CardDashboardSmall product='XXXXX' percent={6.5} label='' />
        </div>
        <div className="w-full mt-5 flex gap-5">
          <div className="flex flex-col gap-5">
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
