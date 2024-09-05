// src/components/Header.js

import React from "react";
import styled from "styled-components";

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #333;
  padding: 15px;
  text-align: center;
  z-index: 10;

  a {
    margin: 0 15px;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    text-decoration: none;

    &:hover {
      color: #ff6347;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 0.9rem;
    }
  }
`;

const Header = () => (
  <NavBar>
    <a href="#home">Home</a>
    <a href="#features">Features</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </NavBar>
);

export default Header;
