import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../../utils/dateFormat';
import { calender, rupees, trash } from '../../utils/Icons';

function IncomeItem({
  id,
  title,
  amount,
  date,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    // ... (category icons code)
  };

  const expenseCatIcon = () => {
    // ... (expense category icons code)
  };

  return (
    <IncomeItemStyled indicator={indicatorColor} type={type}>
      <div className="icon">
        {type === 'expense' ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <p className="date">
          {calender} {dateFormat(date)}
        </p>
        {rupees} {amount}
        <span className="btn-con" style={{ float: 'right', marginTop: '-2rem' }}>
          <button
            className="delete-button"
            onClick={() => deleteItem(id)}
          >
            {trash}
          </button>
        </span>
      </div>
    </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
  }

  .icon {
    font-size: 2rem;
    color: ${(props) => props.indicator || '#333'};
  }

  .content {
    flex-direction: row;
    flex: 1;
    direction: row;

    h5 {
      font-size: 1rem;
      margin: 0;
      color: #333;
    }

    .date {
      font-size: 0.6rem;
      color: #888;
    }

    .btn-con {
      margin-left: 1rem;
    }

    .delete-button {
      background-color: black;
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 1px;
      font-size: 0.8rem;
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: background-color 0.2s ease-in-out;
    }

    .delete-button:hover {
      background-color: red;
    }
  }
`;

export default IncomeItem;
