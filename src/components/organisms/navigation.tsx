import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import {
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarMenu,
  // NavbarStart,
  NavbarEnd,
} from 'bloomer'

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header css={style}>
      <Navbar className="is-dark is-fixed-top">
        <NavbarBrand>
          <Link to="/" className="navbar-item">
            #Ria
          </Link>
          {/* <NavbarBurger isActive={isOpen} onClick={() => {setIsOpen(!isOpen)}}/> */}
        </NavbarBrand>
        {/* <NavbarMenu isActive={isOpen}>
          <NavbarEnd>
            <Link to="/about/" className="navbar-item">About</Link>
          </NavbarEnd>
        </NavbarMenu> */}
      </Navbar>
    </header>
  )
}

const boxShadow = '0 0 4px rgba(0, 0, 0, 0.14), 0 4px 7px rgba(0, 0, 0, 0.28)'

const style = css({
  marginTop: '52px',
  '.navbar': {
    boxShadow,
    fontWeight: 'bold',
    height: '52px',

    '.navibar-brand, .navbar-menu': {
      background: 'inherit',

      '.navbar-item': {
        color: 'hsl(0,0%,96%)',
        '&:hover': {
          background: 'inherit !important',
          color: '#ee4c83 !important',
        },
      },
    },

    '.navibar-brand': {
      padding: '0 16px',
    },

    '.navbar-menu': {
      '@media screen and (max-width: 1088px)': {
        boxShadow,

        '.navbar-item': {
          marginLeft: '2em',
        },
      },
    },
  },
})
