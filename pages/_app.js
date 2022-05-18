import { createGlobalStyle } from "styled-components";
import Head from "next/head";

const GlobalStyles = createGlobalStyle`
  body {
    font-family:'Montserrat', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;

  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
