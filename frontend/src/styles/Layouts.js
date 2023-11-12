import styled from "styled-components";

export const MainLayout = styled.div`
 
`;

export const ContentWrapper = styled.div`
 
`;

export const InnerLayout = styled.div`

`;

export const Header = styled.header`
  text-align: center;
  padding: 1rem 0;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #555;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: #333;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff; /* Blue color */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
  }
`;
