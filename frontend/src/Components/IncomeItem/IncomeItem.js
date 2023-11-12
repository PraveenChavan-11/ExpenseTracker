import React from 'react';
import styled from 'styled-components';
import { dateFormat } from '../../utils/dateFormat';
import {
  bitcoin,
  book,
  calender,
  card,
  circle,
  clothing,
  rupees,
  food,
  freelance,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  trash,
  tv,
  users,
  yt,
} from '../../utils/Icons';
import CustomButton from '../Button/Button';

function IncomeItem({
  id,
  title,
  amount,
  date,
  category,
  description,
  deleteItem,
  indicatorColor,
  type,
}) {
  const categoryIcon = () => {
    switch (category) {
      case 'salary':
        return money;
      case 'freelancing':
        return freelance;
      case 'investments':
        return stocks;
      case 'stocks':
        return users;
      case 'bitcoin':
        return bitcoin;
      case 'bank':
        return card;
      case 'youtube':
        return yt;
      case 'other':
        return piggy;
      default:
        return '';
    }
  };

  const expenseCatIcon = () => {
    switch (category) {
      case 'education':
        return book;
      case 'groceries':
        return food;
      case 'health':
        return medical;
      case 'subscriptions':
        return tv;
      case 'takeaways':
        return takeaway;
      case 'clothing':
        return clothing;
      case 'travelling':
        return freelance;
      case 'other':
        return circle;
      default:
        return '';
    }
  };

  return (
    <IncomeItemStyled indicator={indicatorColor} type={type}>
      <div className="icon">
        {type === 'expense' ? expenseCatIcon() : categoryIcon()}
      </div>
      <div className="content">
        <h5>{title}</h5>
        <div className="inner-content">
          <div className="text">
            <p>
              {rupees} {amount}
            </p>
            <p>
              {calender} {dateFormat(date)}
            </p>
            <p>{description}</p>
          </div>
          <div className="btn-con">
            <CustomButton
              name={'Delete'}
              icon={trash}
              bPad={'0.8rem'}
              bRad={'30px'}
              bg={'#e63946'}
              color={'#fff'}
              iColor={'#fff'}
              hColor={'#ea5459'}
              onClick={() => deleteItem(id)}
            />
          </div>
        </div>
      </div>
    </IncomeItemStyled>
  );
}

const IncomeItemStyled = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }

  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;

  .icon {
    font-size: 24px;
    color: ${(props) => props.indicator || '#333'};
  }

  .content {
    flex: 1;
    display: flex;
    flex-direction: column;

    h5 {
      font-size: 1.2rem;
      margin: 0;
    }

    .inner-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 0.5rem;

      .text {
        p {
          font-size: 1rem;
          margin: 0;
          display: flex;
          align-items: center;

          svg {
            margin-right: 0.5rem;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
`;

export default IncomeItem;
