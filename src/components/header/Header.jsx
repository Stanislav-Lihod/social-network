import "./header.css";
import Logo from "./logo/Logo";
import Burger from "./burger/Burger";
import Container from "./container/Container";

const Header = () => {
  return(
    <header>
      <Logo />
      <Container />
      <Burger/>
  </header>) 
}

export default Header;