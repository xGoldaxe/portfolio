import {useEffect, useState} from 'react'
import Header from '../components/Header'
import projectAppear from '../src/js/animation/projectAppear'
import scroll from '../src/js/scroll'
import projects from '../public/projects/project.json'


export default function Home({handleTransition, transitionOver}) {
    const [actualProject, setActualProject] = useState(0)
    const ALLPROJECTS = projects.projects

    useEffect(() => {
        document.querySelector('.home').style.display = "none"
    }, [])

    useEffect(() => {
        if(transitionOver) {
            document.querySelector('.home').style.display = "flex"

            const promise1 = new Promise((resolve, reject) => {
                projectAppear(resolve)
            });
            promise1.then(()=> {   
                scroll()
            })
        }
    }, [transitionOver])
    
    function updateProject(e) {
        if(e.deltaY > 0 && actualProject < ALLPROJECTS.length-1) {
            setActualProject(a => a += 1)
        } else if (e.deltaY < 0 && actualProject > 0) {
            setActualProject(a => a -= 1)
        }
    }

    return (
    <div className="home">
        <header>
            <div className="headerLine"></div>
            <Header handleTransition={handleTransition}/>
        </header>
        <div className="section" onWheel={(e) => updateProject(e)}>
            <div className="project">
                <div className="project__info">
                    <div className="project__info__scroller">
                        {actualProject > 0 ?
                            <div className="project__info__scroller__previous">
                                <p>previous</p>
                                <h4>{ALLPROJECTS[actualProject-1].name}</h4>
                            </div> :
                            <div className="project__info__scroller__previous">
                                <p> </p>
                                <h4> </h4>
                            </div> 
                        }
                        <div className="project__info__scroller__bar"></div>
                        {actualProject < ALLPROJECTS.length-1 ?
                            <div className="project__info__scroller__previous">
                                <p>next</p>
                                <h4>{ALLPROJECTS[actualProject+1].name}</h4>
                            </div> :
                            <div className="project__info__scroller__previous">
                                <p> </p>
                                <h4> </h4>
                            </div> 
                        }
                    </div>
                    <div className="project__info__desc">
                        <p className="project__info__desc__number">{"0" + (actualProject+1)}</p>
                        <h3 className="project__info__desc__title">{ALLPROJECTS[actualProject].name}</h3>
                        <p className="project__info__desc__date">JAN. 2020</p>
                    </div>
                </div>

                <div className="project__image" onClick={() => handleTransition(`project/${ALLPROJECTS[actualProject].name.toLowerCase().split(' ').join('_')}`)}>
                    <div className="project__image__container">
                        <img src={`/image/${ALLPROJECTS[actualProject].image}`} alt="project" />
                    </div>
                    <div className="project__image__background"></div>
                    <div className="project__image__mask"></div>
                    <div className="project__image__topDecoration"></div>
                    <div className="project__image__bottomDecoration"></div>
                </div>

                <div className="scroll">
                    <p>scroll</p>
                    <div className="scroll__line"></div>
                </div>
            </div>
            
            {/* <div className="boxSection">
                <div className="boxSection__projects--container">
                    <div className="boxSection__projects">
                        {projects.projects.map((project)=>{
                            return(                        
                            <div className="boxSection__projects__project" onClick={() => handleTransition(`project/${project.name.toLowerCase().split(' ').join('_')}`)}>
                                <img src={`/image/${project.image}`} alt={project.name}/>
                                <div className="boxSection__projects__project__preview">
                                    <div className="boxSection__projects__project__preview__bg"></div>
                                    <h3>{project.name}</h3>
                                </div>
                            </div>)
                        })}
                    </div>
                    <div className="boxSection__decorationTop">
                        <img src="/image/textDecoration.svg" alt=""/>
                        <div className="boxSection__decorationTop__line"></div>
                    </div>
                    <div className="boxSection__decoration">
                        <img src="/image/textDecoration.svg" alt=""/>
                        <div className="boxSection__decoration__line"></div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
)}
