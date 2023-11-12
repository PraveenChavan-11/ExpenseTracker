import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ name, children, onClick, bg, bPad, color, bRad }) {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {children}
      {name}
    </ButtonStyled>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func,
  bg: PropTypes.string,
  bPad: PropTypes.string,
  color: PropTypes.string,
  bRad: PropTypes.string,
};

Button.defaultProps = {
  bg: '#007bff', // Default background color
  bPad: '0.8rem 1.6rem', // Default padding
  color: '#fff', // Default text color
  bRad: '30px', // Default border radius
};

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: ${(props) => props.bPad};
  border-radius: ${(props) => props.bRad};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #0056b3; // Hover background color
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0.5rem 1rem;
  }
`;

export default Button;
