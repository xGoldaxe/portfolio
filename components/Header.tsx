import React from 'react'
import StyledLink from './StyledLink'

export default function Header({handleTransition}) {
    return (
        <nav>
            <StyledLink onClick={() => handleTransition('/', 'transition0')}>Accueil</StyledLink>
            <StyledLink onClick={() => handleTransition('/project', 'transition0')}>Projets</StyledLink>
            <StyledLink onClick={() => handleTransition('/about', 'transition0')}>A propos</StyledLink>
            <StyledLink onClick={() => handleTransition('/blog', 'transition0')}>Blog</StyledLink>
        </nav>
    )
}
