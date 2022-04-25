import styled from "styled-components";

const Header = (props) => <div><Heading>{props.title.toUpperCase()}</Heading></div>


const Heading = styled.h1`
font-size: 1.5rem;
color:  #03163e;
font-weight: 900;
padding: 30px;
padding-bottom: 25px;

`
export default Header;
