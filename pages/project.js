import Head from 'next/head'
import {useEffect} from 'react'
import Link from 'next/link'
import horizontalScroll from '../src/js/horizontalScroll'
import {gsap} from 'gsap'


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
                <div className="block1"></div>
                <div className="block2"></div>
                <div className="boxSection--container">
                    <h2>I make website with special attention</h2>
                    <div className="boxSection__project project1">
                        <img src="image/power4.PNG" alt="power 4 online"/>
                    </div>
                    <div className="boxSection__project project2">
                        <img src="image/fm.PNG" alt="old porfolio"/>
                    </div>
                    <div className="boxSection__project project3">
                        <img src="image/blocky.PNG" alt="blocky game"/>
                    </div>
                    <div className="boxSection__project project4">
                        <img src="image/insanet.PNG" alt="insane transition"/>
                    </div>
                </div>
            </div>

            <div className="about">
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
            </div>
        </div>
)}
