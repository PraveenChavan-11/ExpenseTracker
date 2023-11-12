import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

function Income() {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, [getIncomes]);

  return (
    <IncomeStyled>
      <InnerLayout>
        <Header>
          <SectionTitle>Income</SectionTitle>
          <TotalIncome>
            Total Income: <IncomeAmount>₹{totalIncome()}</IncomeAmount>
          </TotalIncome>
        </Header>
        <IncomeContent>
          <FormContainer>
            <Form />
          </FormContainer>
          <IncomeList>
            <IncomeHeader>
              <IncomeHistoryTitle>Income History</IncomeHistoryTitle>
            </IncomeHeader>
            {incomes.length === 0 ? (
              <NoIncomes>No income added yet.</NoIncomes>
            ) : (
              <IncomeHistory>
                {incomes.map((income, index) => (
                  <IncomeCard key={income._id}>
                    <IncomeItem
                      id={income._id}
                      title={income.title}
                      description={income.description}
                      amount={income.amount}
                      date={income.date}
                      type={income.type}
                      category={income.category}
                      indicatorColor="#36c16f" /* Green for income */
                      deleteItem={deleteIncome}
                    />
                  </IncomeCard>
                ))}
              </IncomeHistory>
            )}
          </IncomeList>
        </IncomeContent>
      </InnerLayout>
    </IncomeStyled>
  );
}

const IncomeStyled = styled.div`
  background-color: #ffffff;
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

const TotalIncome = styled.div`
  background: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: 18px;
  display: flex;
  align-items: center;
`;

const IncomeAmount = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #36c16f; /* Green color */
  margin-left: 10px;
`;

const IncomeContent = styled.div`
  display: flex;
  gap: 40px;
`;

const FormContainer = styled.div`
  flex: 1;
`;

const IncomeList = styled.div`
  flex: 2;
`;

const IncomeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const IncomeHistoryTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

const IncomeHistory = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap to the next row */
  gap: 20px; /* Adjust the gap between items */
`;

const IncomeCard = styled.div`
  width: calc(50% - 10px); /* Display two cards in a row */
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const NoIncomes = styled.p`
  font-size: 16px;
  color: #777;
  text-align: center;
`;

export default Income;
