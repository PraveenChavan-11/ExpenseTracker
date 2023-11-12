import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  return (
    <ExpensesStyled>
      <InnerLayout>
        <Header>
          <SectionTitle>Expenses</SectionTitle>
          <TotalExpense>
            Total Expense: <span>₹{totalExpenses()}</span>
          </TotalExpense>
        </Header>
        <Content>
          <LeftContent>
            <ExpenseForm />
          </LeftContent>
          <RightContent>
            <ExpenseHistory>
              <HistoryTitle>Expense History</HistoryTitle>
              {expenses.length === 0 ? (
                <NoExpenses>No expenses added yet.</NoExpenses>
              ) : (
                <ExpenseCardContainer>
                  {expenses.map((expense) => (
                    <ExpenseCard key={expense._id}>
                      <IncomeItem
                        id={expense._id}
                        title={expense.title}
                        description={expense.description}
                        amount={expense.amount}
                        date={expense.date}
                        type={expense.type}
                        category={expense.category}
                        indicatorColor="#e63946" // Red for expenses
                        deleteItem={deleteExpense}
                      />
                    </ExpenseCard>
                  ))}
                </ExpenseCardContainer>
              )}
            </ExpenseHistory>
          </RightContent>
        </Content>
      </InnerLayout>
    </ExpensesStyled>
  );
}

const ExpensesStyled = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const TotalExpense = styled.div`
  background: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
  span {
    font-size: 22px;
    font-weight: 700;
    color: #e63946;
    margin-left: 10px;
  }
`;

const Content = styled.div`
  display: flex;
  gap: 20px;
`;

const LeftContent = styled.div`
  flex: 1;
`;

const RightContent = styled.div`
  flex: 2;
`;

const ExpenseHistory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HistoryTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const NoExpenses = styled.p`
  font-size: 16px;
  color: #777;
  text-align: center;
`;

const ExpenseCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-between;
`;

const ExpenseCard = styled.div`
  width: calc(50% - 10px); /* Two cards per row with a 20px gap */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default Expenses;
