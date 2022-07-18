import { useEffect, useRef } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Page from '../components/Page'
import TopBar from '../components/TopBar'
import { blogArticleAppear } from '../src/js/animation/blogArticleAppear'

let client = require('contentful').createClient({
	space: 'qvbhdsetf6gx',
	accessToken: 'E3_YCaH3rnbgi1ylxjTs6JP5KaviVJFgWtEwOJ8oCBk'
})

export async function getStaticProps() {
	let data = await client.getEntries({
		content_type: 'blog',
		select: ['fields.slug', 'fields.title', 'fields.preview', 'fields.thumnail']
	}).catch(()=>{})

	return {
		props:{
			articles: data
		},
		revalidate: 1,
	}
}

export default function Blog({handleTransition, transitionOver, articles}) {
	
	return (

		<Page handleTransition={handleTransition} transitionOver={transitionOver}>
			{articles ?
				<BlogContent handleTransition={handleTransition}
				transitionOver={transitionOver} articles={articles.items}/>
				:
				<p>Error please retry later</p>
			}			
		</Page>
	)
}

function BlogContent({handleTransition, transitionOver, articles}) {
	useEffect(()=>{
		if (transitionOver)
			blogArticleAppear()
	}, [transitionOver])

	return (
		<div className="blog">
			<div className="blog__title">Blog</div>
			<div className="blog__subtitle">Du code, des ressources utiles, des projets et autres</div>

			{articles.map((article, id)=>{
				return (<Article handleTransition={handleTransition} key={id} article={article}/>)
			})}
		</div>
	)
}

function Article({article, handleTransition}) {

	return (
		<div className='article' onClick={()=> handleTransition(`/blog/${article.fields.slug}`, 'transition1')}>
			<div className='article__title'>{article.fields.title}</div>
			<div className='article__resume'>
				<img src={`https:${article.fields.thumnail?.fields.file.url}`} alt=''
				className='article__resume__image'/>
				<div className='article__resume__content'>
					{article.fields.preview?.content[0]?.content[0]?.value} [...]
				</div>
			</div>
			<div className='article__line'></div>
			<img src={'/image/textDecoration.svg'} alt='' className='article__textDecoration'/>
		</div>
	)
}