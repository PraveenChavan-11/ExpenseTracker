import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ name, children, onClick, variant }) {
  const buttonVariants = {
    default: {
      bg: '#333', // Default background color
      color: '#fff', // Default text color
      hoverBg: '#222', // Hover background color
    },
    primary: {
      bg: '#007bff', // Primary background color
      color: '#fff', // Primary text color
      hoverBg: '#0056b3', // Hover background color
    },
    success: {
      bg: '#28a745', // Success background color
      color: '#fff', // Success text color
      hoverBg: '#1a8429', // Hover background color
    },
  };

  const { bg, color, hoverBg } = buttonVariants[variant] || buttonVariants.default;

  return (
    <ButtonStyled onClick={onClick} bg={bg} color={color} hoverBg={hoverBg}>
      {children}
      {name}
    </ButtonStyled>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['default', 'primary', 'success']),
};

const ButtonStyled = styled.button`
  outline: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 0.8rem 1.6rem;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${(props) => props.hoverBg};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0.5rem 1rem;
  }
`;

export default Button;
