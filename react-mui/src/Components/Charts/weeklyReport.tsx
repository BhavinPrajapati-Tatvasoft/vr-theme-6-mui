import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value: any) {
              return '$' + value;
            }
          },
        },
      },
    },
  },
};

const labels = ['Week  01', 'Week  02', 'Week  03', 'Week  04', 'Week  05'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 25, 45, 20, 40, 15],
      backgroundColor: '#3EAE86',
      barThickness: 22,
    },
    {
      label: 'Dataset 2',
      data: [20, 40, 30, 30, 20, 50],
      backgroundColor: '#C4E1D7',
      barThickness: 22,
    },
  ],
};

const WeeklyReport = () => {
  return (
    <div><Bar options={options} data={data} height={140} /></div>
  )
}

export default WeeklyReport;