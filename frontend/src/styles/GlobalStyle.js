import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-color: #black; /* Adjust primary color */
    --color-green: #42AD00;
    --color-accent: #F56692;
    --color-delete: #FF0000;
    
    /* Dark Mode Colors */
    --background: #121212;
    --text-color: #fff;
    --header-background: #333;
  }

  body {
    font-family: 'Nunito', sans-serif;
    font-size: 16px; /* Base font size */
    overflow-x: hidden;
    color: var(--primary-color); /* Adjust text color */
    background-color: var(--background); /* Adjust background color */
  }

  /* Responsive typography */
  @media (max-width: 768px) {
    body {
      font-size: 14px; /* Adjust font size for smaller screens */
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary-color);
  }

  /* Style links */
  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: var(--color-accent); /* Adjust link hover color */
  }

  /* Add styles for error messages */
  .error {
    color: var(--color-delete); /* Adjust error message color */
    animation: shake 0.5s ease-in-out;

    @keyframes shake {
      0% {
        transform: translateX(0);
      }
      25% {
        transform: translateX(10px);
      }
      50% {
        transform: translateX(-10px);
      }
      75% {
        transform: translateX(10px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;
