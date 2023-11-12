import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';

function ExpenseForm() {
  const { addExpense, totalIncome, error, setError, getExpenses, getIncomes } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: null,
    category: '',
    description: '',
  });

  useEffect(() => {
    getIncomes();
    getExpenses();
  }, [getIncomes, getExpenses]);

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (parseFloat(totalIncome()) >= parseFloat(amount)) {
      addExpense(inputState);
      setInputState({
        title: '',
        amount: '',
        date: null,
        category: '',
        description: '',
      });
    } else {
      console.log("Insufficient Income.");
      setError('Add income first to cover this expense.');
    }
  };

  return (
    <ExpenseFormStyled onSubmit={handleSubmit}>
      <Heading>Add Expense</Heading>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormContent>
        <FormSection>
          <InputLabel>Expense Title</InputLabel>
          <Input
            type="text"
            value={title}
            name={'title'}
            placeholder="Expense Title"
            onChange={handleInput('title')}
          />
        </FormSection>
        <FormSection>
          <InputLabel>Expense Amount</InputLabel>
          <Input
            value={amount}
            type="number"
            name={'amount'}
            placeholder={'Expense Amount (INR)'}
            onChange={handleInput('amount')}
          />
        </FormSection>
        <FormSection>
          <InputLabel>Select a Date</InputLabel>
          <DatePicker
            id="date"
            placeholderText="Select a Date"
            selected={date}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => {
              setInputState({ ...inputState, date: date });
            }}
          />
        </FormSection>
        <FormSection>
          <InputLabel>Select Category</InputLabel>
          <Select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput('category')}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="education">Education</option>
            <option value="groceries">Groceries</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
            <option value="takeaways">Takeaways</option>
            <option value="clothing">Clothing</option>
            <option value="travelling">Travelling</option>
            <option value="other">Other</option>
          </Select>
        </FormSection>
        <FormSection>
          <InputLabel>Add a Reference</InputLabel>
          <Textarea
            name="description"
            value={description}
            placeholder="Add A Reference"
            id="description"
            rows="4"
            onChange={handleInput('description')}
          />
        </FormSection>
        <SubmitButton>
          <Button
            name={'Add Expense'}
            icon={plus}
            bPad={'0.8rem 1.6rem'}
            bRad={'30px'}
            bg={'var(--color-accent)'}
            color={'#fff'}
          />
        </SubmitButton>
      </FormContent>
    </ExpenseFormStyled>
  );
}

const ExpenseFormStyled = styled.form`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  margin-bottom: 4px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.div`
  text-align: right;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  margin: 0;
`;

export default ExpenseForm;
