import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarController, BarElement } from 'chart.js/auto';
import { CustomerData } from '../data';

Chart.register(BarController, BarElement);

const BarChart = () => {
  const data = {
    labels: CustomerData.map((data) => data.year),
    datasets: [
      {
        label: 'Cutomers Gained',
        data: CustomerData.map((data) => data.customerGain),
        backgroundColor: ['#4FD1C5', '#E9D8FD', '#FC8181', '#F3BA2F', '#2A71D0'],
      },
    ],
  };

  return (
    <div>
      <h1 style={{ color: '#319795' }}>Bar Chart</h1>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;
