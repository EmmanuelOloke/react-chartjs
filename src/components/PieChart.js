import React from 'react';
import { Pie } from 'react-chartjs-2';
import { CustomerData } from '../data';

const PieChart = () => {
  const data = {
    labels: CustomerData.map((data) => data.year),
    datasets: [
      {
        label: 'Cutomers Lost',
        data: CustomerData.map((data) => data.customersLost),
        backgroundColor: ['#4FD1C5', '#E9D8FD', '#FC8181', '#f3ba2f', '#2a71d0'],
      },
    ],
  };

  return (
    <div>
      <h1 style={{ color: '#0BC5EA' }}>Pie Chart</h1>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
