import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Website
        </a>
      </h1>
      <ul>
        <li>
          <Link to="/">1.About Us</Link>
        </li>
        <li>
          <Link to="/work">2.Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3.Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};
//Style

const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  min-height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;
export default Nav;
