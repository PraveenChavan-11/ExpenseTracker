import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';

function History() {
  const { transactionHistory } = useGlobalContext();

  const history = transactionHistory();

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      <div className="history-list">
        {history.map((item) => {
          const { _id, title, amount, type } = item;
          const isExpense = type === 'expense';
          const amountSign = isExpense ? '-' : '+';
          const amountColor = isExpense ? 'red' : 'var(--color-green)';

          return (
            <div key={_id} className="history-item">
              <p className="title" style={{ color: amountColor }}>
                {title}
              </p>

              <p className="amount" style={{ color: amountColor }}>
                {`${amountSign}${amount <= 0 ? 0 : amount}`}
              </p>
            </div>
          );
        })}
      </div>
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #fff;
  backdrop-filter: blur(4.5px);
  border-radius: 20px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);

  h2 {
    color: var(--primary-color);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .history-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    .title {
      flex: 1;
      font-size: 1rem;
    }

    .amount {
      font-size: 1.2rem;
    }
  }
`;

export default History;
