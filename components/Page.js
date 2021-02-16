import styled, { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: 'Montserrat-Regular';
  src: url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')
  format('ttf');
  font-weight: 400;
}
@font-face {
  font-family: 'Montserrat-Bold';
  src: url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap')
  format('ttf');
  font-weight: 500;
}
  html {
    --revBlue: #599198;
    --revPurple: #602F4F;
    --revGold: #AD7E4B;

    --grey: #E5E8EA; 
    --gray: var(--grey); 
    --lightGrey: #F4F4F4;
    --lightGray: var(----lightGrey);

    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);

    box-sizing: border-box;
    font-size: 62.5%;

    *, *:before, *:after {
      box-sizing: inherit;
    }
  }

  body {
    font-family: 'Montserrat-Regular',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }

  a {
    text-decoration: none;
    color: black;
    margin-right: 1rem;
    text-decoration: none;
    font-size: 1.2rem;
  }

  a:hover {
    color: var(--revGold);
  }

  button {
    font-family: 'Montserrat-Regular',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return <div>
    <GlobalStyles />
    <Header />
    <InnerStyles>{children}</InnerStyles>
    
  </div>
}