import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  min-height: 80px;
`
const Header =() => {
    return (
        <Nav className="navbar navbar-light bg-white mb-5">
            <div className="navbar-header">
                <div className="navbar-brand text-danger text-lg brand-text font-weight-bold">
                    Basket UI
                </div>
            </div>
        </Nav>
    )
}

export default Header