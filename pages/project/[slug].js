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

            <div className="project__img">
                <div className="project__img__bg"></div>
                <img src={`/image/${projectData.image}`} alt=""/>
            </div>
            <div className="project__desc">
                <div className="project__desc__back" onClick={() => handleTransition('/project')}>
                    <img src="/image/arrow.svg" alt=""/>
                </div>
                <ul className="project__tag">
                    {projectData.tags.map((tag)=>{
                        return <li>{tag}</li>
                    })}
                </ul>
                <h3>{projectData.name}</h3>
                <p>{projectData.desc}</p>

                <a className="project__desc__link" href={projectData.link}><p>Look at me</p></a>

            </div>

        </div>
    )
}
