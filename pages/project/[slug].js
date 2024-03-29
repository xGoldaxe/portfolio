import React from 'react'
import projects from '../../public/projects/project'


export async function getStaticPaths() {
    const paths = projects.projects.map((project) => {
        return {params: {
            slug: project.name.toLowerCase().split(' ').join('_')
        }}
    })
    return {
      paths,
      fallback: false
    }
}
export async function getStaticProps({ params }) {
    const projectData = projects.projects[projects.projects.findIndex((project) => params.slug === project.name.toLowerCase().split(' ').join('_'))]
    return {
      props: {
        projectData
      }
    }
  }

export default function Project({ projectData, handleTransition }) {
    return (
        <div className="project">
            <div className="project__desc">
                <div className="project__desc__back" onClick={() => handleTransition('/project', 'transition1')}>
                    <img src="/image/arrow.svg" alt=""/>
                </div>
                <ul className="project__desc__tag">
                    {projectData.tags.map((tag, i)=>{
                        return <li key={i}>{tag}</li>
                    })}
                </ul>
                <h3>{projectData.name}</h3>
                <p>{projectData.desc}</p>
            </div>
            <a href={projectData.link}>
                <div className="project__img">
                    <div className="project__img__bg"></div>
                    <img src={`/image/${projectData.image}`} alt=""/>
                </div>
            </a>
            <div className='project__line'></div>
            <img src='/image/textDecoration.svg' alt='' className='project__textDecoration'/>
        </div>
    )
}
