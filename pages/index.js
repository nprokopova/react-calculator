import App from "../components/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
  }
`;
export default function Home() {
  return (
    <>
      <GlobalStyles />
      <App />
    </>
  );
}
