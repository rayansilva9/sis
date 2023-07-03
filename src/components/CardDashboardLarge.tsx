import { memo, useContext } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { ThemeContext } from '@/context/themeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CardDashboardLarge = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 54, 76, 12, 54, 12, 87],
        borderColor: 'rgba(247, 3, 255, 0.972)',
        backgroundColor: 'rgba(247, 3, 255, 0.491)',
      },
      {
        label: 'Dataset 2',
        data: [90, 12, 34, 76, 23, 37, 79],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const { theme, changeTheme } = useContext(ThemeContext)


  return (
    <>
      <div className="md:w-[auto] h-[200px] lg:w-[550px] rounded-xl px-4 "
        style={{
          cursor: 'crosshair',
          background: theme == 'light' ? 'white' : 'black',
          boxShadow: `-9px 0px 18px ${theme == 'light' ? 'white' : 'red'},9px 9px 18px ${theme == 'light' ? 'white' : 'red'},`,
        }}>
        <Line width={undefined} height={undefined} options={options} data={data} />
      </div>
    </>
  );
}

export default memo(CardDashboardLarge);