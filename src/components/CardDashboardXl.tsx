import dynamic from 'next/dynamic'

const CardDashboardXL = () => {
  const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })


  const LineX = [{ name: 'preto', data: [12, 56, 23, 42] }, { name: 'macaco', data: [6, 34, 45, 2] }, { name: 'carvão', data: [32, 16, 33, 52] }]

  return (
    <>
      <div
        style={{ background: '#d7f2f87d' }}
        className="w-[520px] h-[420px] rounded-3xl bg-green-600 pt-9"
      >
        {typeof window !== 'undefined' && (
          <Chart
            options={{}}
            series={LineX}
          />
        )}
      </div>
    </>
  )
}

export default CardDashboardXL



{/* <Chart
series={[44, 55, 67, 83]}
options={{
  chart: {
    height: 400,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize:'22px',
        },
        value: {
          fontSize:'15px',
        },
        total: {
          show: true,
          label: 'Total',
          
        }
      },
    }
  },labels:['Apples', 'Oranges', 'Bananas', 'Berries'],
}}
/> */}