import React, {useState} from 'react'
import StyledLink from './StyledLink'

export default function TopBar({handleTransition}) {
    const [menuOpen, setMenuOpen] = useState(false)

    function openMenu() {
        setMenuOpen(x => !x)
    }

    return (
        <div className="topBar">
            <p>Pierre EVL</p>
            <div className="hamburgerMenu" onClick={openMenu}>
                <div className="hamburgerMenu__bar"></div>
                <div className="hamburgerMenu__bar"></div>
                <div className="hamburgerMenu__bar"></div>
            </div>
            {menuOpen && <div className="menu">
                <div className="menu__top">
                    <p>Pierre EVL</p>
                    <div className="hamburgerMenu" onClick={openMenu}>
                        <div className="hamburgerMenu__bar"></div>
                        <div className="hamburgerMenu__bar"></div>
                        <div className="hamburgerMenu__bar"></div>
                    </div>
                </div>
                <nav>
                    <StyledLink onClick={() => handleTransition('/', 'transition0')} className={""}>Accueil</StyledLink>
                    <StyledLink onClick={() => handleTransition('/project', 'transition0')} className={""}>Projets</StyledLink>
                    <StyledLink onClick={() => handleTransition('/about', 'transition0')} className={""}>A propos</StyledLink>
                    <StyledLink className={""}>Blog</StyledLink>
                </nav>
                <div className="menu__socials">
                    <a href="https://www.linkedin.com/in/pierre-leveque-723399201/"><img src="/image/linkedin.svg"/></a>
                    <a href="https://www.instagram.com/pierre123987/"><img src="/image/insta.svg"/></a>
                    <a href="mailto:pierreleveque.pro@gmail.com"><img src="/image/mail.svg"/></a>
                </div>
            </div>}
        </div>
    )
}
