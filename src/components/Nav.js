import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
const Nav = () => {
  const { pathname } = useLocation();
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
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">2.Our Work</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">3.Contact Us</Link>
          <StyledLine
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "40%" : "0%" }}
          />
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

const StyledLine = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background: #23d997;
  position: absolute;
  margin-top: 0.5rem;
`;
export default Nav;
