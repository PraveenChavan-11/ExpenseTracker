import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import IncomeItem from '../IncomeItem/IncomeItem'; // Change this import
import ExpenseForm from './ExpenseForm'; // Change this import

const primaryColor = '#3498db'; // Use the same primaryColor as in the Income component
const secondaryColor = '#36c16f'; // Use the same secondaryColor as in the Income component

function Expenses() {
  const { expenses, getExpenses, deleteExpense, totalExpenses } = useGlobalContext();

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const totalExpenseValue = totalExpenses();

  return (
    <ExpensesStyled>
      <InnerLayout>
        <ExpenseContent>
          <FormContainer>
            <ExpenseForm /> {/* Use ExpenseForm component */}
          </FormContainer>
          <ExpenseHistory>
            <HistoryHeader>
              <SectionTitle>Expense Tracker</SectionTitle>
              <TotalExpense>
                Total Expense: <span>{`₹${totalExpenseValue}`}</span>
              </TotalExpense>
            </HistoryHeader>
            <HistoryList>
              {expenses.length === 0 ? (
                <NoExpenses>No expenses added yet.</NoExpenses>
              ) : (
                <ExpenseItemsContainer>
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
                        smallSize // Add a prop for small card size
                      />
                    </ExpenseCard>
                  ))}
                </ExpenseItemsContainer>
              )}
            </HistoryList>
          </ExpenseHistory>
        </ExpenseContent>
      </InnerLayout>
    </ExpensesStyled>
  );
}

// Add the styled components below:

const ExpensesStyled = styled.div`
  background-color: #f0f0f0; // Use the same background color as in the Income component
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const ExpenseContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  flex: 1;
`;

const ExpenseHistory = styled.div`
  flex: 1;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: linear-gradient(to right, ${primaryColor}, ${secondaryColor}); // Use the same gradient as in the Income component
  border-radius: 10px 10px 0 0;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  margin: 0;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const TotalExpense = styled.div`
  background: ${secondaryColor}; // Use the same secondaryColor as in the Income component
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin-left: 10px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const HistoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExpenseItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
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

const NoExpenses = styled.p`
  font-size: 18px;
  color: #777;
  text-align: center;
`;

export default Expenses;
