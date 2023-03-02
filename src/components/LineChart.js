import React from 'react';
import { Line } from 'react-chartjs-2';
import { BalanceData } from '../data';

import { Chart, LineElement } from 'chart.js';

Chart.register(LineElement);

const LineChart = () => {
  const data = {
    labels: BalanceData.map((data) => data.month),
    datasets: [
      {
        label: 'My Balance',
        data: BalanceData.map((data) => data.balance),
        lineTension: 0.5,
        backgroundColor: '#9F7AEA',
        borderColor: '#9F7AEA',
        pointBorderColor: '#B57295',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#D6BCFA',
        pointHoverBorderColor: '#D6BCFA',
        pointRadius: 3,
      },
    ],
  };

  return (
    <div>
      <h1 style={{ color: '#805AD5' }}>Line Chart</h1>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
