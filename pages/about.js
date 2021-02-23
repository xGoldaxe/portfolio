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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea aspernatur cumque cupiditate debitis molestias. Eos distinctio laboriosam obcaecati! Possimus consectetur quod praesentium repellat in nihil, amet numquam delectus. Deserunt dolorum, ab animi quia ad est officiis unde amet aliquid.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ea aspernatur cumque cupiditate debitis molestias. Eos distinctio laboriosam obcaecati! Possimus consectetur quod praesentium repellat in nihil, amet numquam delectus. Deserunt dolorum, ab animi quia ad est officiis unde amet aliquid.</p>
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
