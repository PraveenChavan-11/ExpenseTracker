import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";
import avatar from '../../img/avatar.png';

const LoginStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const AvatarContainer = styled.div`
  background: linear-gradient(135deg, #007bff, #333);
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

const LoginFormContainer = styled.div`
  background: linear-gradient(135deg, #007bff, #333);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  text-align: center;
  color: white; /* Set text color to white */
`;

const FormContainer = styled.form`
  text-align: center;
  width: 100%;
`;

const InputField = styled.input`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease-in-out;
  color: #333;
  background-color: #f7f7f7;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ErrorMessage = styled.div`
  color: #ff3333;
  margin-top: 0.5rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: black;
`;

const SignupLink = styled(Link)`
  margin-top: 1rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: accent;
  }
`;

const BlackButton = styled(Button)`
  background-color: darkblack;
  color: white;

  &:hover {
    background-color: #333;
  }
`;

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/auth";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
  
      // Log the login info to the console
      console.log("Login successful. Token:", res.data);
  
      // Navigate to the Dashboard
      navigate("/dashboard");
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
    <LoginStyled>
      <AvatarContainer>
        <Avatar src={avatar} alt="User Avatar" />
      </AvatarContainer>
      <LoginFormContainer>
        <Title>Login to Your Account</Title>
        <FormContainer onSubmit={handleSubmit}>
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
          <BlackButton type="submit" className="green_btn">
            Login
          </BlackButton>
        </FormContainer>
        <SignupLink to="/signup">New Here? Sign Up</SignupLink>
      </LoginFormContainer>
    </LoginStyled>
  );
};

export default Login;
