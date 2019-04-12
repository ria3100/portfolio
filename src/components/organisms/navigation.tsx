import React from 'react'
import styled from '@emotion/styled'
import { Link } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  // NavbarItem,
  NavbarBurger,
  NavbarMenu,
  // NavbarStart,
  NavbarEnd,
} from 'bloomer'

export default () => {
  return (
    <StyledNavbar className="is-dark is-fixed-top">
      <NavbarBrand>
        <Link to="/" className="navbar-item">
          #Ria
        </Link>
        <NavbarBurger isActive={false} />
      </NavbarBrand>
      <NavbarMenu isActive={false}>
        <NavbarEnd>
          <Link to="/" className="navbar-item">About</Link>
          <Link to="/" className="navbar-item">Contact</Link>
          <Link to="/" className="navbar-item">Blog</Link>
        </NavbarEnd>
      </NavbarMenu>
    </StyledNavbar>
  )
}

const StyledNavbar = styled(Navbar)`
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);
  font-weight: bold;
  padding: 0 48px;
`

// const Logo = styled(NavbarItem)`
//   font-family: 'Product Sans', sans-serif;
//   color: #e91e63;
// `
