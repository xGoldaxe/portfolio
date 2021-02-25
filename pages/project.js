import {useEffect, useState} from 'react'
import Header from '../components/Header'
import projectAppear from '../src/js/animation/projectAppear'
import scroll from '../src/js/scroll'
import projects from '../public/projects/project.json'
import projectTransiton from '../src/js/transition/projectTransition'
import {makeCancelable} from '../src/js/lib/cancelablePromise'

export default function Home({handleTransition, transitionOver}) {
    const [actualProject, setActualProject] = useState(0)
    const [inTransition, setInTransition] = useState(true)
    const ALLPROJECTS = projects.projects
    let tl = null
    let cancelablePromise = null

    useEffect(() => {
        document.querySelector('.projectsPage').style.display = "none"
        return ()=>{
            if(tl !== null) {
                tl.kill()
            }
        }
    }, [])

    useEffect(() => {
        if(transitionOver) {
            document.querySelector('.projectsPage').style.display = "flex"
            
            ////
            cancelablePromise = makeCancelable(
                new Promise((resolve, reject) => {
                    tl = projectAppear(resolve)
                })
            );
            cancelablePromise
            .promise
            .then(() => {
                scroll()
                setInTransition(false)
            })
            .catch((reason) => {});
            
        }
        return()=>{
            if(cancelablePromise) {
                cancelablePromise.cancel()
            }
        }
    }, [transitionOver])
    
    
    async function updateProject(e, inTransition) {
        if(!inTransition && ((e.deltaY > 0 && actualProject < ALLPROJECTS.length-1) || (e.deltaY < 0 && actualProject > 0))) {
            setInTransition(true)
            await projectTransiton()
            setInTransition(false)
            if(e.deltaY > 0 && actualProject < ALLPROJECTS.length-1) {
                setActualProject(a => a += 1)
            } else if (e.deltaY < 0 && actualProject > 0) {
                setActualProject(a => a -= 1)
            }
            projectTransiton(true)
        }
    }

    async function handleNewProject(direction, inTransition) {
        if(!inTransition && (actualProject < ALLPROJECTS.length-1 || actualProject > 0)) {
            setInTransition(true)
            await projectTransiton()
            setInTransition(false)
            if(direction === "+" && actualProject < ALLPROJECTS.length-1) {
                setActualProject(a => a += 1)
            } else if (direction === "-" && actualProject > 0) {
                setActualProject(a => a -= 1)
            }
            projectTransiton(true)
        }
    }

    return (
    <div className="projectsPage">
        <div style={{display: "none"}}>
            {ALLPROJECTS.map((project,i)=>{
                <img key={i} src={`/image/${project.image}`} />
            })}
        </div>
        <header>
            <div className="headerLine"></div>
            <Header handleTransition={handleTransition}/>
        </header>
        <div className="section" onWheel={(e) => updateProject(e, inTransition)}>
            <div className="projects">
                <div className="projects__info">
                    <div className="projects__info__scroller">
                        {actualProject > 0 ?
                            <div className="projects__info__scroller__previous" onClick={() => handleNewProject('-', inTransition)}>
                                <p>previous</p>
                                <h4>{ALLPROJECTS[actualProject-1].name}</h4>
                            </div> :
                            <div className="projects__info__scroller__previous">
                                <p> </p>
                                <h4> </h4>
                            </div> 
                        }
                        <div className="projects__info__scroller__bar"></div>
                        {actualProject < ALLPROJECTS.length-1 ?
                            <div className="projects__info__scroller__previous" onClick={() => handleNewProject('+', inTransition)}>
                                <p>next</p>
                                <h4>{ALLPROJECTS[actualProject+1].name}</h4>
                            </div> :
                            <div className="projects__info__scroller__previous">
                                <p> </p>
                                <h4> </h4>
                            </div> 
                        }
                    </div>
                    <div className="projects__info__desc">
                        <div className="projects__info__desc__textContainer">
                            <p className="projects__info__desc__textContainer__number">{"0" + (actualProject+1)}</p>
                        </div>
                        <div className="projects__info__desc__textContainer">
                            <h3 className="projects__info__desc__textContainer__title" 
                            onClick={() => handleTransition(`project/${ALLPROJECTS[actualProject].name.toLowerCase().split(' ').join('_')}`, 'transition1')}>
                                {ALLPROJECTS[actualProject].name}
                            </h3>
                        </div>
                        <div className="projects__info__desc__textContainer">
                            <p className="projects__info__desc__textContainer__date">{ALLPROJECTS[actualProject].date}</p>
                        </div>
                    </div>
                </div>

                <div className="projects__image--container">
                    <div className="projects__image" onClick={() => handleTransition(`project/${ALLPROJECTS[actualProject].name.toLowerCase().split(' ').join('_')}`, 'transition1')}>
                        <div className="projects__image__container">
                            <img src={`/image/${ALLPROJECTS[actualProject].image}`} alt="project" />
                        </div>
                        <div className="projects__image__background"></div>
                        <div className="projects__image__mask"></div>
                        <div className="projects__image__topDecoration"></div>
                        <div className="projects__image__bottomDecoration"></div>
                    </div>
                </div>


                <div className="scroll">
                    <p>scroll</p>
                    <div className="scroll__line"></div>
                </div>
            </div>
        </div>
    </div>
)}
