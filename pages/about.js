import Header from '../components/Header'


export default function Home({handleTransition, transitionOver}) {



  return (
    <div className="home">
        <header>
            <div className="headerLine"></div>
            <Header handleTransition={handleTransition}/>
        </header>

        <div className="aboutText">
            <h3>About me</h3>
            <p>Merci de votre visite ici ! Je suis Pierre Leveque et je suis développeur. 
                Vous cherchez quelqu'un d’ambitieux, créatif, passionné etc… Prenez donc le temps de regarder ce que je propose :wink: . Du front end avant tout, donc html css (sass) javascript 
                enfin la base quoi. J’apprécie et utilise React afin de mettre des applications complètes et évidemment du contrôle de version avec git. Next est aussi une technologie que je trouve 
                très intéressante afin d’offrir des sites très performant ! Je peux aussi avoir un oeil critique sur du backend via nodejs. Enfin voilà à peu près ce que je propose. Niveau études je 
                n’ai absolument rien, j’ai su (et je continue) de me former avec la quantité énorme de contenue disponible partout sur internet et du dur labeur, 
                ce qui m’a permis d’apprendre en profondeur les technologies que j’utilise et de devenir réellement autonome (ca n’a pas été facile)</p>
            <p>J’aime sincèrement le développement, enfin surtout le création, et cela se ressent dans mon travail (enfin j'espère). Participer à l’élaboration d'un projet passionnant et utile serait pour moi un véritable plaisir, et pour vous une bonne affaire! Ces derniers mois j’ai appliqué un nouveau mode de vie qui m’a permis d’être une meilleur version de moi; je travail, je fais du sport, je mange bien et équilibré, je dors suffisamment et me tous les jours à 6h, sans exceptions (comme on dit l’avenir appartient à ceux qui se lèvent tôt). D’un naturel compétiteur je me confronte au problèmes et n’abandonne jamais (c’est souvent l’égo qui parle ;)) mais depuis que je suis dans le développement il n’y a pas un seul problème que je n’ai pas résolu, j’ai, comme la vie, toujours su trouvé un chemin, et ce n’était pas toujours le bon, mais ça ce sont d’autres problèmes :wink: </p>
            <p>Bref assez parlé de moi, maintenant vous pouvez aller voir mes différents projets si ce n’est pas déjà fait ou me contacter!</p>
            <div className="aboutText__decoration">
                        <img src="/image/textDecoration.svg" alt=""/>
                        <div className="aboutText__decoration__line"></div>
            </div>
        </div>
        <div id="circle--wrapper">
            <img src='/image/pierre1.png' alt="pierre image" />
        </div>

  </div>
)}
