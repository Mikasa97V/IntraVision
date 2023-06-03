import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { navItems } from '../lib'

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 8px;
  padding: 15px 0;
  text-align: center;
  text-decoration: none;
  color: #fff;

  &:hover {
    background-color: #002c49;
  }
`

const Navigation = () => (
  <StyledNavigation>
    {navItems.map((it) => (
      <StyledNavLink to={it.to} key={it.to}>
        <img src={it.imgOptions.img} alt={it.title} width={it.imgOptions.width} height={it.imgOptions.height} />
        <span>{it.title}</span>
      </StyledNavLink>
    ))}
  </StyledNavigation>
)

export default Navigation
