// src/components/Header.js
// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './samburu.jpg';


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

const LogoImage = styled.img`
  max-height: 50px; /* Set a maximum height for the logo */
  margin-right: 10px; /* Adjust the margin as needed */
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
      <LogoImage src={Logo} alt="Your Company Logo" />
      <div>
      <span>Samburu Digital Museum</span>
      </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/museum">Museum</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          
        </ul>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;
