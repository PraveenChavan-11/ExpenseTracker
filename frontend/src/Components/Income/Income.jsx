import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import Form from '../Form/Form';
import IncomeItem from '../IncomeItem/IncomeItem';

const primaryColor = '#3498db';
const secondaryColor = '#36c16f';

const Income = () => {
  const { incomes, getIncomes, deleteIncome, totalIncome } = useGlobalContext();

  useEffect(() => {
    getIncomes();
  }, [getIncomes]);

  const totalIncomeValue = totalIncome();

  return (
    <IncomeStyled>
      <InnerLayout>
        <IncomeContent>
          <FormContainer>
            <Form />
          </FormContainer>
          <IncomeHistory>
            <HistoryHeader>
              <SectionTitle>Income Tracker</SectionTitle>
              <TotalIncome>
                Total Income: <span>{`₹${totalIncomeValue}`}</span>
              </TotalIncome>
            </HistoryHeader>
            <HistoryList>
              {incomes.length === 0 ? (
                <NoIncomes>No income added yet.</NoIncomes>
              ) : (
                <IncomeItemsContainer>
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
                        indicatorColor={income.type === 'income' ? secondaryColor : '#e74c3c'}
                        deleteItem={() => deleteIncome(income._id)}
                        smallSize // Add a prop for small card size
                      />
                    </IncomeCard>
                  ))}
                </IncomeItemsContainer>
              )}
            </HistoryList>
          </IncomeHistory>
        </IncomeContent>
      </InnerLayout>
    </IncomeStyled>
  );
};

const IncomeItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const IncomeStyled = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const IncomeContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
  flex: 1;
`;

const IncomeHistory = styled.div`
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
  background: linear-gradient(to right, ${primaryColor}, ${secondaryColor});
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

const TotalIncome = styled.div`
  background: ${secondaryColor};
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

const IncomeCard = styled.div`
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

const NoIncomes = styled.p`
  font-size: 18px;
  color: #777;
  text-align: center;
`;

export default Income;
