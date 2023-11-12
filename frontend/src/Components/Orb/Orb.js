import React from 'react';
import styled from 'styled-components';
import { useWindowSize } from '../../utils/useWindowSize';

const OrbStyled = styled.div`
  width: 60vmin;
  height: 60vmin;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  filter: blur(20px);
  transition: filter 0.5s ease-in-out;
  will-change: transform;
  opacity: 0.7; /* Adjust the opacity for a subtle effect */
  border: 3px solid #fff; /* Add a border */
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3); /* Add a shadow */
`;

function Orb() {
  const { width, height } = useWindowSize();

  console.log(width, height);

  return <OrbStyled />;
}

export default Orb;
