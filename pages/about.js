import Header from '../components/Header'
import TopBar from '../components/TopBar'
import StyledLink from '../components/StyledLink'
import { useEffect } from 'react'
import { aboutAppear } from '../src/js/animation/aboutAppear'

export default function About({handleTransition, transitionOver}) {

	useEffect(()=>{
		if (transitionOver)
			aboutAppear()
	}, [transitionOver])

	return (
		<div className="about">
		<header>
			<div className="headerLine"></div>
			<Header handleTransition={handleTransition}/>
		</header>
		<TopBar handleTransition={handleTransition}/>

		<div className="about__text">

			<p>
			<span className={'about__text__almostTitle'}>Looking for a developper? </span>
			Im freelance and I can help you to build your dream
			interface, or connect you to an API or wathever you need! Student from 42 Paris,
			I've build a strong background in computer science and low level developpment (
			c and c++ ), and got specialized in Front-end developement with the newer
			technologies like react and nextjs.
			</p>
			<p>
			You can take see my differents projects here, or take a look at my github.
			</p>
			<p>
			For more informations about my technical stack you can contact me on
			linkedin, discord or mail.
			</p>
			<div className="about__text__socials">
			<a href="https://discordapp.com/users/283996693282947073"><img src="/image/discord.svg"/></a>
			<a href="https://www.linkedin.com/in/pierre-leveque-723399201/"><img src="/image/linkedin.svg"/></a>
			<a href="mailto:pierreleveque.pro@gmail.com"><img src="/image/mail.svg"/></a>
			</div>
			<div className='about__line'></div>
			<img src='/image/textDecoration.svg' alt='' className='about__textDecoration'/>
		</div>


		</div>
	)
}
