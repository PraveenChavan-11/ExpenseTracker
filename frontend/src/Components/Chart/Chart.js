import React from 'react';
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { dateFormat } from '../../utils/dateFormat';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
);

function Chart() {
  const { incomes, expenses } = useGlobalContext();

  const data = {
    labels: incomes.map((inc) => {
      const { date } = inc;
      return dateFormat(date);
    }),
    datasets: [
      {
        label: 'Income',
        data: [...incomes.map((income) => income.amount)],
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Teal color with transparency
        borderColor: 'rgba(75, 192, 192, 1)', // Solid Teal color
        tension: 0.2,
      },
      {
        label: 'Expenses',
        data: [...expenses.map((expense) => expense.amount)],
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red color with transparency
        borderColor: 'rgba(255, 99, 132, 1)', // Solid Red color
        tension: 0.2,
      },
    ],
  };

  return (
    <ChartStyled>
      <Line data={data} options={chartOptions} />
    </ChartStyled>
  );
}

const ChartStyled = styled.div`
  background-color: #fff;
  border: 2px solid #333;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius: 10px;
  height: 100%;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const chartOptions = {
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#333',
        font: {
          weight: 'bold',
        },
      },
    },
    y: {
      grid: {
        color: '#ccc',
      },
      ticks: {
        color: '#333',
        font: {
          weight: 'bold',
        },
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#333',
        font: {
          weight: 'bold',
        },
      },
    },
    tooltip: {
      enabled: true,
    },
  },
};

export default Chart;
