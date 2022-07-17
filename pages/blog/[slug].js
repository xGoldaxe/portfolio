import { useEffect } from 'react'
import Header from '../../components/Header'
import TopBar from '../../components/TopBar'
import { aboutAppear } from '../../src/js/animation/aboutAppear'
import { articlePageAppear } from '../../src/js/animation/articlePageAppear'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'

let client = require('contentful').createClient({
	space: 'qvbhdsetf6gx',
	accessToken: 'E3_YCaH3rnbgi1ylxjTs6JP5KaviVJFgWtEwOJ8oCBk'
})

export async function getStaticPaths() {
    let data = await client.getEntries({
        content_type: 'blog',
		select: 'fields.slug'
    }).catch(()=>{})

	var paths = []
	if (data) {
		paths = data.items.map(article =>{
			return {params: {slug: article.fields.slug}}
		})
	}

    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    let data = await client.getEntries({
		'content_type': 'blog',
		'fields.slug': params.slug
	}).catch(()=>{})

	var article = data.total === 1 ? data.items[0] : null

    return { 
        props: {
			article
        },
        revalidate: 1
    }
}

export default function PageArticle({article, handleTransition, transitionOver}) {
	
	useEffect(()=>{
		if (transitionOver)
			articlePageAppear()
	}, [transitionOver])

	return (
		<div className='about'>
			<header>
				<div className="headerLine"></div>
				<Header handleTransition={handleTransition}/>
			</header>
			<TopBar handleTransition={handleTransition}/>

			{article && <PageArticleContent article={article}/>}
		</div>
	)
}

function PageArticleContent({article}) {
	
	const date = new Date(article.fields.date)
	return (
		<div className="articlePage">
			<div className='articlePage__image'>
				<img src={`https:${article.fields.thumnail.fields.file.url}`} alt=''
					className='articlePage__image__img'/>
			</div>
			{/* <div className='articlePage__title'>{article.fields.title}</div> */}
			<div className='articlePage__date'>Posted {date.toDateString()}</div>
			<div className='articlePage__content'>
				{documentToReactComponents(article.fields.article, {
                        renderNode: {
                            [BLOCKS.EMBEDDED_ASSET]: (node,) => (
                                <Image 
                                    src={'https:' + node.data.target.fields.file.url}
                                    width={node.data.target.fields.file.details.image.width}
                                    height={node.data.target.fields.file.details.image.height}
                                />
                            ),
                        }, 
				})}
				<div className='about__line articlePage__decoLine'></div>
				<img src='/image/textDecoration.svg' alt='' className='about__textDecoration'/>
			</div>
		</div>
	)
}