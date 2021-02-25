import React from 'react'
import { transition1 } from '../src/js/transition/transition1'
import StyledLink from './StyledLink'

export default function Header({handleTransition}) {
    return (
        <nav>
            <StyledLink onClick={() => handleTransition('/', 'transition0')}>Accueil</StyledLink>
            <StyledLink onClick={() => handleTransition('/project', 'transition0')}>Projets</StyledLink>
            <StyledLink onClick={() => handleTransition('/about', 'transition0')}>A propos</StyledLink>
            <StyledLink>Blog</StyledLink>
        </nav>
    )
}
