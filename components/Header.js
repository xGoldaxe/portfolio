import React from 'react'
import StyledLink from './StyledLink'

export default function Header({handleTransition}) {
    return (
        <nav>
            <StyledLink onClick={() => handleTransition('/')}>Accueil</StyledLink>
            <StyledLink onClick={() => handleTransition('/project')}>Projects</StyledLink>
            <StyledLink onClick={() => handleTransition('/about')}>About</StyledLink>
            <StyledLink>Blog</StyledLink>
        </nav>
    )
}
