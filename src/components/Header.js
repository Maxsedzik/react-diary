import React from 'react'
import { StyledHeader } from './styles/Header.styled'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <StyledHeader>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/addnote'>Add new note</Link>
                    </li>
                    <li>
                        <Link to='/notes'>Notes</Link>
                    </li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header
