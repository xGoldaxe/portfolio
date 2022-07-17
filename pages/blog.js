import { useEffect } from 'react'
import Header from '../components/Header'
import TopBar from '../components/TopBar'
import { blogArticleAppear } from '../src/js/animation/blogArticleAppear'

export default function Blog({handleTransition, transitionOver}) {

return (
	<div className="about">
		<header>
			<div className="headerLine"></div>
			<Header handleTransition={handleTransition}/>
		</header>
		<TopBar handleTransition={handleTransition}/>

		<BlogContent />

	</div>
)
}


function BlogContent() {
	useEffect(()=>{
		blogArticleAppear()
	}, [])

	return (
		<div className="blog">
			<div className="blog__title">Blog</div>
			<div className="blog__subtitle">Du code, des ressources utiles, des projets et autres</div>

			<Article />
			<Article />
			<Article />
			<Article />

			<div className='blog__footer'>
				<div className="blog__footer__text">This is the end my friend</div>
				<div className="menu__socials">
	            	<a href="https://discordapp.com/users/283996693282947073"><img src="/image/discord.svg"/></a>
                    <a href="https://www.linkedin.com/in/pierre-leveque-723399201/"><img src="/image/linkedin.svg"/></a>
                    <a href="mailto:pierreleveque.pro@gmail.com"><img src="/image/mail.svg"/></a>
                </div>
			</div>
		</div>
	)
}

function Article() {
	
	return (
		<div className='article'>
			<div className='article__title'>Lorem lorem lorem lorem</div>
			<div className='article__resume'>
				<div className='article__resume__image'></div>
				<div className='article__resume__content'>
				Lorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem lorem
				Lorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem lorem
				Lorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem lorem
				Lorem lorem lorem loremLorem lorem lorem loremLorem lorem lorem lorem
				</div>
			</div>
			<div className='article__line'></div>
			<img src='/image/textDecoration.svg' alt='' className='article__textDecoration'/>
		</div>
	)
}