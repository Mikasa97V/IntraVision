import React from 'react';
import { navItems } from "../lib";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
`

const StyledNavLink = styled(NavLink)`
  text-align: center;
  text-decoration: none;
  color: #fff;
`


const Navigation = () => {

  return (
    <StyledNavigation>
      {navItems.map((it) => (
        <StyledNavLink
          to={it.link}
          key={it.link}
        >
          {it.title}
        </StyledNavLink>
      ))}
    </StyledNavigation>
  )
}

export default Navigation;
