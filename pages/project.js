import Head from 'next/head'
import {useEffect} from 'react'
import Link from 'next/link'
import horizontalScroll from '../src/js/horizontalScroll'
import {gsap} from 'gsap'
import projects from '../public/projects/project'

export default function Home({handleTransition}) {
    useEffect(() => {
        let toKill = horizontalScroll()
        return(()=>{
            toKill.scrollTrigger.kill(true)
        })
    }, [])

    return (
        <div className="section">
            <div className="homeButton">
                <div></div>
                <span onClick={() => handleTransition('./')}>Home</span>
                <div></div>
            </div>
            
            <div className="boxSection">
                {/* <h2>I make website with special attention</h2> */}
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
            
            </div>

            {/* <div className="about">
                <div className="about__text">
                    <h3>I develop website</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea aspernatur cumque cupiditate debitis molestias. Eos distinctio laboriosam obcaecati! Possimus consectetur quod praesentium repellat in nihil, amet numquam delectus. Deserunt dolorum, ab animi quia ad est officiis unde amet aliquid.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea aspernatur cumque cupiditate debitis molestias. Eos distinctio laboriosam obcaecati! Possimus consectetur quod praesentium repellat in nihil, amet numquam delectus. Deserunt dolorum, ab animi quia ad est officiis unde amet aliquid.</p>
                    <h3>Maybe its time to contact me?</h3>
                    <div className="about__text__contact">
                        <ul>
                            <li>Linkedin</li>
                            <li>Discord</li>
                            <li>Instagram</li>
                        </ul>
                        <img src="image/meme.jpg" alt=""/>
                    </div>
                    <p className="about__text__ty">Thanks for your visit! have a great day sir</p>
                </div>
            </div> */}
        </div>
)}
