// src/components/Header.js
// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #333;
  color: white;
  padding: 10px;
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: space-around; /* Align items horizontally */

    li {
      a {
        color: white;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;

