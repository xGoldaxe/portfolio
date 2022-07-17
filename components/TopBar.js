import React, {useState, useEffect} from 'react'
import StyledLink from './StyledLink'
import menuAppear from '../src/js/animation/menuAppear'
import {gsap} from 'gsap'
import burgerTransition from '../src/js/animation/burgerTransition'

export default function TopBar({handleTransition}) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [tl, letTl] = useState(false)



    async function openMenu(menuOpen, tl) {
        if(!menuOpen) {
            if(tl) {
                tl.kill()
            }
            await setMenuOpen(true)
            letTl(menuAppear(()=>{}))
        } 
        else {

            if(tl) {
                let progress = tl.time()
                tl.kill()
                tl = menuAppear(()=>{
                    setMenuOpen(false)
                }, progress)
            } else {
                tl = menuAppear(()=>{
                    setMenuOpen(false)
                }, 0)
            }
        }
    }


    return (
        <div className="topBar">
            <p onClick={() => handleTransition('/', 'transition0')} className={'topBar__name'}>Pierre EVL</p>
            <div className="hamburgerMenu" onClick={() => openMenu(menuOpen, tl)}>
                <div className="hamburgerMenu__bar"></div>
                <div className="hamburgerMenu__bar"></div>
                <div className="hamburgerMenu__bar"></div>
            </div>
            {(menuOpen) && <div className="menu">
                <div className="menu__bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="menu__top">
                    <p className={'topBar__name'}>Pierre EVL</p>
                    <div className="hamburgerMenu animatedBurger" onClick={() => openMenu(menuOpen, tl)}>
                        <div className="hamburgerMenu__bar"></div>
                        <div className="hamburgerMenu__bar"></div>
                        <div className="hamburgerMenu__bar"></div>
                    </div>
                </div>
                <nav>
                    <StyledLink onClick={() => handleTransition('/', 'transition0')} className={"menuLink"}>Accueil</StyledLink>
                    <StyledLink onClick={() => handleTransition('/project', 'transition0')} className={"menuLink"}>Projets</StyledLink>
                    <StyledLink onClick={() => handleTransition('/about', 'transition0')} className={"menuLink"}>A propos</StyledLink>
                    <StyledLink onClick={() => handleTransition('/blog', 'transition0')} className={"menuLink"}>Blog</StyledLink>
                </nav>
                <div className="menu__socials">
	            	<a href="https://discordapp.com/users/283996693282947073"><img src="/image/discord.svg"/></a>
                    <a href="https://www.linkedin.com/in/pierre-leveque-723399201/"><img src="/image/linkedin.svg"/></a>
                    <a href="mailto:pierreleveque.pro@gmail.com"><img src="/image/mail.svg"/></a>
                </div>
            </div>}
        </div>
    )
}
