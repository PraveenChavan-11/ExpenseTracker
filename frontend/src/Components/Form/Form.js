import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useGlobalContext } from '../../context/globalContext';
import Button from '../Button/Button';
import { plus } from '../../utils/Icons';

function Form() {
  const { addIncome, error, setError } = useGlobalContext();
  const [inputState, setInputState] = useState({
    title: '',
    amount: '',
    date: null,
    category: '',
    description: '',
  });

  const { title, amount, date, category, description } = inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome(inputState);
    setInputState({
      title: '',
      amount: '',
      date: null,
      category: '',
      description: '',
    });
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Heading>Add Income</Heading>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <FormContent>
        <FormSection>
          <InputLabel>Income Source</InputLabel>
          <Input
            type="text"
            value={title}
            name={'title'}
            placeholder="E.g., Monthly Salary"
            onChange={handleInput('title')}
          />
        </FormSection>
        <FormSection>
          <InputLabel>Income Amount</InputLabel>
          <Input
            value={amount}
            type="number"
            name={'amount'}
            placeholder="Enter Amount"
            onChange={handleInput('amount')}
          />
        </FormSection>
        <FormSection>
          <InputLabel>Select Date</InputLabel>
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
      </FormContent>
      <FormContent>
        <FormSection>
          <InputLabel>Income Category</InputLabel>
          <Select
            required
            value={category}
            name="category"
            id="category"
            onChange={handleInput('category')}
          >
            <option value="" disabled>
              Choose Category
            </option>
            <option value="salary">Salary</option>
            <option value="freelancing">Freelancing</option>
            <option value="investment">Investment</option>
            <option value="rental">Rental</option>
            <option value="other">Other</option>
          </Select>
        </FormSection>
        <FormSection>
          <InputLabel>Add a Note</InputLabel>
          <Textarea
            name="description"
            value={description}
            placeholder="Add a Note or Reference"
            id="description"
            rows="4"
            onChange={handleInput('description')}
          />
        </FormSection>
      </FormContent>
      <SubmitButton>
        <Button
          name={'Add Income'}
          icon={plus}
          bPad={'0.8rem 1.6rem'}
          bRad={'30px'}
          bg={'#36c16f'}
          color={'#fff'}
        />
      </SubmitButton>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  width: 100%;
`;

const Heading = styled.h2`
  font-size: 24px;
  margin: 0;
  color: #333;
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  margin: 0;
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
  font-size: 14px;
  margin-bottom: 4px;
  color: #333;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.div`
  text-align: right;
`;

export default Form;
