import { memo } from 'react'

type props = {
  width?: string
  label: string
  product: string
  percent: number
}

const CardDashboardSmall = ({ width = '250px', label, percent, product }: props) => {
  return (
    <>
      <div style={{
        width: width, background: 'white',
      }} className="h-[200px] rounded-3xl flex items-center justify-center px-6 py-9">
        <div className="skill">
          <div className="outer">
            <div className="inner flex items-center justify-center">
              <div id="number" className='font-semibold'>
                50%
              </div>
            </div>
          </div>
          <svg id='svg' xmlns="http://www.w3.org/2000/svg" version='1.1'
            width="160px" height="160px">
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#00ffdd" />
                <stop offset="50%" stop-color="#1500ff" />
                <stop offset="100%" stop-color="#b700ff" />
              </linearGradient>
            </defs>
            <circle id='circle' cx="80" cy="80" r="70" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default memo(CardDashboardSmall);