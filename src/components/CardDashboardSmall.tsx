import { ImCodepen } from 'react-icons/im';
import { IoTrendingUp } from 'react-icons/io5';


type props = {
  width?: string
  label: string
  product: string
  percent: number
}

const CardDashboardSmall = ({ width = '250px', label, percent, product }: props) => {
  return (
    <>
      <div style={{ width: width, background: 'white', boxShadow: "-3px 0px 13px #bebebe, 4px 4px 14px #ffffff" }} className="h-[200px] rounded-3xl flex flex-col justify-between px-6 py-9">
        <div className='flex gap-6'>
          <div className='flex items-center py-[8px] px-[8px] rounded-[10px] bg-[#00bfff]' >
            <ImCodepen style={{ fontSize: '22px', color: 'white', }} />
          </div>
          <div className="flex items-center gap-1">
            <IoTrendingUp style={{ fontSize: '26px', }} />
            <p>{percent}%</p>
          </div>
        </div>
        <div>
          <p className='text-2xl font-semibold'>{product}</p>
          <p className='text-lg' >{label}</p>
        </div>
      </div>
    </>
  );
}

export default CardDashboardSmall;