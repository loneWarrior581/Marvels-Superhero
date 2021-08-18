import React from 'react'
import logo from '../../img/logo.png'
function Header() {
    return (
        <header className="header-logo">
            <img data-testid="header" src={logo} alt="marvel studios logo" />
        </header>
    )
}

export default Header
