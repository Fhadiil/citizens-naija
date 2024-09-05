import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background: #282c34;
  padding: 20px;
  color: white;
  text-align: center;
`;

const NavLinks = styled.nav`
  a {
    margin: 0 15px;
    color: white;
    font-weight: bold;
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>Citizen's Naija</h1>
    <NavLinks>
      <Link to="/">Home</Link>
      <Link to="/features">Features</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </NavLinks>
  </HeaderContainer>
);

export default Header;
