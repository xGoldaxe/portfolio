import Header from '../components/Header'
import TopBar from '../components/TopBar'
import StyledLink from '../components/StyledLink'
import { useEffect } from 'react'
import { aboutAppear } from '../src/js/animation/aboutAppear'
import Page from '../components/Page'

export default function About({handleTransition, transitionOver}) {

	useEffect(()=>{
		if (transitionOver)
			aboutAppear()
	}, [transitionOver])

	return (
		<Page handleTransition={handleTransition} transitionOver={transitionOver}>
			<div className="about__text">

				<p>
				<span className={'about__text__almostTitle'}>Looking for a developper? </span>
				I am freelance and I can help you build your dream
				interface, or connect to an API or whatever you need! Student of 42 Paris,
				I acquired a solid background in computer science and low-level development (
				C and C++), and specialized in Front-end development with the latest
				technologies like react and nextjs.
				</p>
				<p>
				You can see my different projects here, or take a look at my github
				</p>
				<p>
				For more information about my technical stack you can contact me on
				linkedin, discord or email.
				</p>
				<div className='about__line about__text__line'></div>
				<img src='/image/textDecoration.svg' alt='' className='about__textDecoration'/>
			</div>
		</Page>
	)
}
