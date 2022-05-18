import styled from "styled-components";

const Header = (props) => <div><Heading>{props.title.toUpperCase()}</Heading></div>

const Heading = styled.h1`
font-size: 1.5rem;
color:  #1f3972;
font-weight: 900;
padding: 10px;
padding-bottom: 25px;

`
export default Header;
