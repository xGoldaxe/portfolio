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
            <TopBar  handleTransition={handleTransition}/>
            
            <div className="about__text">
                
                <p><span className="about__text__almostTitle">Merci de votre visite ici !</span> Je suis Pierre Lévêque et je suis développeur. 
                    Vous cherchez quelqu'un d’ambitieux, créatif, passionné… Prenez donc le temps de regarder ce que je propose : du Front End avant tout, donc html css(sass), Javascript la base quoi. J’apprécie et utilise React afin de mettre des applications complètes et évidemment du contrôle de version avec Git. Next est aussi une technologie que je trouve très intéressante afin d’offrir des sites très performants ! Je peux aussi avoir un oeil critique sur du backend via nodejs. Enfin voilà un aperçu de ce que je propose. Niveau études je n’ai absolument rien, j’ai su (et je continue) de me former avec la quantité énorme de contenue disponible partout sur internet et du dur labeur, ce qui m’a permis d’apprendre en profondeur les technologies que j’utilise et de devenir réellement autonome (ca n’a pas été facile).</p>
                <p>
                    J’aime sincèrement le développement, particulièrement la création, et cela se ressent dans mon travail. Participer à l’élaboration d'un projet passionnant et utile serait pour moi un véritable challenge, et pour vous une bonne affaire! D’un naturel compétiteur, je me confronte aux problèmes et n’abandonne jamais (c’est souvent l’égo qui parle) mais depuis que je suis dans le développement, il n’y a pas un seul problème que je n’ai pu résoudre. 
                    Bref assez parlé de moi, maintenant je vous invite à aller voir mes différents projets ou à  me <span className="about__text__important">contacter</span>.</p>

                <div className="about__text__socials">
                    <a href="https://www.linkedin.com/in/pierre-leveque-723399201/"><img src="/image/linkedin.svg"/></a>
                    <a href="https://www.instagram.com/pierre123987/"><img src="/image/insta.svg"/></a>
                    <a href="mailto:pierreleveque.pro@gmail.com"><img src="/image/mail.svg"/></a>
                </div>
                <div className="about__text__line"></div>
            </div>
            <div className="about__image">
                <img src='/image/blackBelt.svg' alt=""/>
            </div>

    </div>
)}
