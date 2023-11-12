import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import History from '../../History/History';

function Dashboard() {
  const { getExpenses } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  return (
    <DashboardStyled>
      <InnerLayout>
        <div className="history-con">
          <h2 className="title">Recent Transactions</h2>
          <TransactionList>
            <History />
          </TransactionList>
        </div>
      </InnerLayout>
    </DashboardStyled>
  );
}

const DashboardStyled = styled.div`
  background-color: #f9f9f9; /* Set a light background color */
  padding: 2rem;
  border-radius: 10px;
  color: #333;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */

  h2.title {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  .history-con {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 1.5rem;

    h2 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      color: #333;
    }
  }
`;

const TransactionList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export default Dashboard;
