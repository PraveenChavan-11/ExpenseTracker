import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { rupees } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
  const {
    totalExpenses,
    incomes,
    expenses,
    totalIncome,
    totalBalance,
    getIncomes,
    getExpenses,
  } = useGlobalContext();

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, [getIncomes, getExpenses]);

  return (
    <DashboardStyled>
      <div className="chart-and-info">
        <div className="chart-con">
          <Chart />
        </div>
        <div className="info-con">
          <div className="amount-con">
            <div className="info-box income">
              <h2>Total Income</h2>
              <p className="amount">
                {rupees} {totalIncome()}
              </p>
            </div>
            <div className="info-box expense">
              <h2>Total Expenses</h2>
              <p className="amount">
                {rupees} {totalExpenses()}
              </p>
            </div>
            <div className="info-box balance">
              <h2>Total Balance</h2>
              <p className="amount balance-amount">
                {rupees} {totalBalance()}
              </p>
            </div>
          </div>
          <div className="history-con">
            <h2 className="title">Salary Range</h2>
            <div className="salary-item">
              <div className="info-box min">
                <p>Min Salary</p>
                <p className="amount">
                  {rupees} {Math.min(...incomes.map((item) => item.amount))}
                </p>
              </div>
              <div className="info-box max">
                <p>Max Salary</p>
                <p className="amount">
                  {rupees} {Math.max(...incomes.map((item) => item.amount))}
                </p>
              </div>
            </div>
            <h2 className="title">Expense Range</h2>
            <div className="salary-item">
              <div className="info-box min">
                <p>Min Expense</p>
                <p className="amount">
                  {rupees} {Math.min(...expenses.map((item) => item.amount))}
                </p>
              </div>
              <div className="info-box max">
                <p>Max Expense</p>
                <p className="amount">
                  {rupees} {Math.max(...expenses.map((item) => item.amount))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  background-color: #f5f5f5;
  padding: 2rem;
  color: #333;
width:100%;

  .chart-and-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .chart-con {
    flex: 1;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.02);
    }
  }

  .info-con {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .amount-con {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: space-between;

      .info-box {
        flex: 1;
        background-color: white;
        border-radius: 10px;
        box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        text-align: center;
        cursor: pointer;
        transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

        &:hover {
          transform: scale(1.02);
          background-color: #f0f0f0;
        }

        h2 {
          font-size: 1rem;
          color: #333;
        }

        .amount {
          font-size: 1.2rem;
          font-weight: bold;
          margin-top: 0.5rem;
          color: #333;
        }
      }

      .balance {
        color: #00aaff;
      }
    }

    .history-con {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      padding: 1rem;

      h2 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #333;
      }

      .title {
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #333;
      }

      .salary-item {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: space-between;

        .info-box {
          flex: 1;
          background-color: #f5f5f5;
          border-radius: 10px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          text-align: center;
          transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;

          &:hover {
            transform: scale(1.02);
            background-color: #f0f0f0;
          }

          p {
            font-size: 1.2rem;
            font-weight: bold;
            margin-top: 0.5rem;
            color: #333;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .chart-and-info {
      flex-direction: column;
    }

    .chart-con {
      width: 100%;
    }
  }
`;

export default Dashboard;
