import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import avatar from "../../img/avatar.png";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column; /* Change the flex direction to column */
  align-items: center;
  height: 100vh;
`;

const AvatarContainer = styled.div`
  background: linear-gradient(135deg, #007bff, #333); /* Gradient background */
  border-radius: 50%;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  margin-bottom: 0.5rem; /* Add margin to separate avatar from form */
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

const FormContainer = styled.form`
  background: linear-gradient(135deg, #007bff, #333); /* Gradient background */
  padding: 2rem;
  border-radius: 50px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;
  color: var(--color-black); /* Adjust text color */
  background-color: white; /* Match background color with the form container */

  &:focus {
    outline: none;
    border-color: var(--color-accent); /* Adjust focus border color */
  }
`;

const ErrorMessage = styled.div`
  color: var(--color-delete); /* Adjust error message color */
  margin-top: 0.5rem;
`;

const SubmitButton = styled(Button)` // Use your Button component with styles
  background-color: var(--color-green); /* Adjust button color */
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: var(--color-black); /* Adjust hover color */
  }
`;

const AlreadyHaveAccount = styled(Link)`
  margin-top: 1rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: color 0.3s ease-in-out;
`;

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/users";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <SignupContainer>
      <AvatarContainer>
        <Avatar src={avatar} alt="User Avatar" />
      </AvatarContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <InputField
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleChange}
          value={data.firstName}
          required
        />
        <InputField
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleChange}
          value={data.lastName}
          required
        />
        <InputField
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
        />
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SubmitButton type="submit">Sign Up</SubmitButton>
        <AlreadyHaveAccount>
          Already have an account? <Link to="/login">Log In</Link>
        </AlreadyHaveAccount>
      </FormContainer>
    </SignupContainer>
  );
};

export default Signup;