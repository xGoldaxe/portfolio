import Header from '../components/Header'
import TopBar from '../components/TopBar'
import StyledLink from '../components/StyledLink'

export default function Home({handleTransition, transitionOver}) {

  return (
    <div className="about">
      <header>
        <div className="headerLine"></div>
        <Header handleTransition={handleTransition}/>
      </header>
      <TopBar handleTransition={handleTransition}/>

      <div className="about__text">

        <p>
          Looking for a developper? Im freelance and I can help you to build your dream
          interface, or connect you to an API or wathever you need! Student from 42 Paris,
          I've build a strong background in computer science and low level developpment (
          c and c++ ), and got specialized in Front-end developement with the newer
          technologies like react and nextjs.
          <hr/>You can take see my differents projects here, or take a look at my github.
          <hr/>For more informations about my technical stack you can contact me on
            Linkedin, discord and by email.
        </p>
        <div className="about__text__socials">
          <a href="https://www.linkedin.com/in/pierre-leveque-723399201/"><img src="/image/linkedin.svg"/></a>
          <a href="mailto:pierreleveque.pro@gmail.com"><img src="/image/mail.svg"/></a>
        </div>
        <div className="about__text__line"></div>
      </div>
      <div className="about__image">
        <img src='/image/blackBelt.svg' alt=""/>
      </div>

    </div>
  )
}
