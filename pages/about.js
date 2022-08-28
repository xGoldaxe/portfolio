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
				Im freelance and I can help you to build your dream
				interface, or connect you to an API or wathever you need! Student from 42 Paris,
				I acquired a strong background in computer science and low-level development (
				C and C++ ), and specialized in Front-end developement with the lattest
				technologies like react and nextjs.
				</p>
				<p>
				You can see my different projects here, or take a look at my github
				</p>
				For more information about my technical stack you can contact me on
				linkedin, discord or email.
				</p>
				<div className='about__line about__text__line'></div>
				<img src='/image/textDecoration.svg' alt='' className='about__textDecoration'/>
			</div>
		</Page>
	)
}
