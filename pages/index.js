import {useEffect, useState} from 'react'
import circle from '../src/js/circle'
import skill from '../src/js/skills'
import scroll from '../src/js/scroll'
import { useRouter } from 'next/router'
import homeAppear from '../src/js/animation/homeAppear'
import Header from '../components/Header'

export default function Home({handleTransition, transitionOver}) {
  const router = useRouter()
  const [mainTl, setMainTl] = useState(null)

  useEffect(() => {
    document.querySelector('.home').style.display = "none"

    return(()=> {
    })
  }, [])

  useEffect(() => {
    if(transitionOver) {
      document.querySelector('.home').style.display = "flex"

      const promise1 = new Promise((resolve, reject) => {
        homeAppear(resolve)
      });
      promise1.then(()=> {
        circle('#circle', 1.3, 3, 6, '#c1c1c1', '#C39031')
        skill()
  
        scroll()
        document.querySelector('.home').addEventListener('wheel', ()=> {
          handleTransition('./project')
        })
      })
    }
  }, [transitionOver])

  

  return (
    <div className="home" style={{display: 'none'}}>
      <header>
          <div className="headerLine"></div>
          <nav>
              <Header handleTransition={handleTransition}/>
          </nav>
      </header>
      <div className="presentationText">
        <h1>GoldStudio présente</h1>
        <p>Pierre Leveque
        <br></br>Développeur Front-end</p>
      </div>
      <div className="leftLine">
        <div className="leftLineBg"></div>
          <div className="skills">
            <div className="skillLineAnime"></div>
              <div className="skill">
                  <div className="skill__text">
                      <svg  fill="#c1c1c1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zm-130 189.1c4.6 8.8 9.3 17.5 14.3 26.1 5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5zm0-50.6c-6.3-14.9-11.6-29.5-16-43.6 14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26zm11.4 25.3c6.6-13.8 13.8-27.3 21.4-40.6 7.6-13.3 15.8-26.2 24.4-38.9 15-1.1 30.3-1.7 45.9-1.7 15.6 0 31 .6 45.9 1.7 8.5 12.6 16.6 25.5 24.3 38.7 7.7 13.2 14.9 26.7 21.7 40.4-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6-15.7 0-30.9-.5-45.6-1.4-8.7-12.7-16.9-25.7-24.6-39-7.7-13.3-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zM256 210.2c25.3 0 45.8 20.5 45.8 45.8 0 25.3-20.5 45.8-45.8 45.8-25.3 0-45.8-20.5-45.8-45.8 0-25.3 20.5-45.8 45.8-45.8"/>
                      </svg>
                      REACT
                  </div>
              </div>
              <div className="skill">                
                  <div className="skill__text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                          <path fill="#c1c1c1" d="M 5.28125 2 A 1.0001 1.0001 0 0 0 4.46875 3.09375 L 8 42.53125 A 1.0001 1.0001 0 0 0 8.71875 43.375 L 24.71875 47.96875 A 1.0001 1.0001 0 0 0 25.28125 47.96875 L 41.28125 43.375 A 1.0001 1.0001 0 0 0 42 42.53125 L 45.53125 3.09375 A 1.0001 1.0001 0 0 0 44.53125 2 L 5.46875 2 A 1.0001 1.0001 0 0 0 5.375 2 A 1.0001 1.0001 0 0 0 5.28125 2 z M 6.5625 4 L 43.4375 4 L 40.09375 41.65625 L 25 45.9375 L 9.90625 41.65625 L 6.5625 4 z M 12.53125 10.0625 A 1.0001 1.0001 0 0 0 11.71875 11.15625 L 13.0625 25.9375 A 1.0001 1.0001 0 0 0 14.03125 26.875 L 30 26.875 L 29.5625 31.46875 L 25.03125 32.4375 L 20.4375 31.46875 L 20.28125 29.84375 A 1.0001 1.0001 0 0 0 19.28125 28.90625 L 14.40625 28.90625 A 1.0001 1.0001 0 0 0 13.40625 30 L 13.96875 36.125 A 1.0001 1.0001 0 0 0 14.65625 37 L 24.59375 40.03125 L 24.71875 40.0625 A 1.0001 1.0001 0 0 0 25.28125 40.0625 L 35.34375 37 A 1.0001 1.0001 0 0 0 36.0625 36.125 L 37.375 21.09375 A 1.0001 1.0001 0 0 0 36.40625 20 L 19.375 20 L 19.125 16.90625 L 36.84375 16.90625 A 1.0001 1.0001 0 0 0 37.84375 16 L 38.28125 11.15625 A 1.0001 1.0001 0 0 0 37.28125 10.0625 L 12.71875 10.0625 A 1.0001 1.0001 0 0 0 12.53125 10.0625 z M 13.8125 12.0625 L 36.1875 12.0625 L 35.9375 14.90625 L 18.03125 14.90625 A 1.0001 1.0001 0 0 0 17.03125 16 L 17.5 21.09375 A 1.0001 1.0001 0 0 0 18.46875 22 L 35.3125 22 L 34.125 35.28125 L 25 38.03125 L 15.875 35.28125 L 15.5 30.90625 L 18.375 30.90625 L 18.5 32.375 A 1.0001 1.0001 0 0 0 19.28125 33.28125 L 24.84375 34.4375 A 1.0001 1.0001 0 0 0 25.25 34.4375 L 30.71875 33.28125 A 1.0001 1.0001 0 0 0 31.5 32.375 L 32.09375 25.9375 A 1.0001 1.0001 0 0 0 31.09375 24.875 L 14.9375 24.875 L 13.8125 12.0625 z"/>
                      </svg>                    
                      HTML & CSS
                  </div>
              </div>
              <div className="skill">
                  <div className="skill__text">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                          <path fill="#c1c1c1" d="M 6.6679688 4 C 5.2057125 4 4 5.2057125 4 6.6679688 L 4 43.332031 C 4 44.794288 5.2057125 46 6.6679688 46 L 43.332031 46 C 44.794288 46 46 44.795836 46 43.333984 L 46 6.6679688 C 46 5.2057125 44.795836 4 43.333984 4 L 6.6679688 4 z M 6.6679688 6 L 43.333984 6 C 43.704133 6 44 6.2962249 44 6.6679688 L 44 43.333984 C 44 43.704133 43.703775 44 43.332031 44 L 6.6679688 44 C 6.296225 44 6 43.703775 6 43.332031 L 6 6.6679688 C 6 6.296225 6.2962249 6 6.6679688 6 z M 23 23 L 23 35.574219 C 23 37.504219 22.269 38 21 38 C 19.673 38 18.749578 37.173656 18.142578 36.097656 L 15 38 C 15.91 39.927 18.142375 42 21.234375 42 C 24.656375 42 27 40.179641 27 36.181641 L 27 23 L 23 23 z M 35.453125 23.001953 C 32.045125 23.001953 29.865234 25.179016 29.865234 28.041016 C 29.865234 31.147016 31.694266 32.616062 34.447266 33.789062 L 35.402344 34.199219 C 37.142344 34.960219 38 35.424422 38 36.732422 C 38 37.824422 37.170844 38.613281 35.589844 38.613281 C 33.707844 38.613281 32.818 37.335 32 36 L 29 38 C 30.12 40.213 32.133734 42 35.677734 42 C 39.301734 42 42 40.118594 42 36.683594 C 42 33.496594 40.170734 32.078453 36.927734 30.689453 L 35.972656 30.28125 C 34.335656 29.57225 33.626953 29.109844 33.626953 27.964844 C 33.626953 27.038844 34.335125 26.328125 35.453125 26.328125 C 36.549125 26.328125 37.254203 26.791844 37.908203 27.964844 L 40.880859 26.056641 C 39.623859 23.845641 37.879125 23.001953 35.453125 23.001953 z"/>
                      </svg>                        
                      JAVASCRIPT & ES6
                  </div>
              </div>
              <div className="skill">
                <div className="skill__text">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                      <path fill="#c1c1c1" d="M25,4c0.566,0,1.097,0.22,1.497,0.62L45.38,23.503c0.826,0.826,0.826,2.169,0,2.995L26.497,45.38 C26.097,45.78,25.566,46,25,46s-1.097-0.22-1.497-0.62L4.62,26.497c-0.826-0.826-0.826-2.169,0-2.995l12.32-12.32l2.274,2.274 c-0.546,2.031,0.005,4.248,1.543,5.786c0.368,0.368,0.786,0.685,1.243,0.945v9.63c-1.822,1.05-3,3.007-3,5.182c0,3.308,2.692,6,6,6 s6-2.692,6-6c0-2.175-1.178-4.132-3-5.182v-7.575l1.214,1.214c-0.546,2.031,0.005,4.248,1.543,5.786C31.891,30.376,33.397,31,35,31 c1.603,0,3.109-0.624,4.243-1.757c2.339-2.339,2.339-6.146,0-8.485c-1.128-1.128-2.627-1.749-4.223-1.749 c-0.529,0-1.055,0.07-1.562,0.206l-2.672-2.672c0.546-2.031-0.005-4.248-1.543-5.786c-1.128-1.128-2.627-1.749-4.223-1.749 c-0.529,0-1.055,0.07-1.562,0.206L21.183,6.94l2.32-2.32C23.903,4.22,24.434,4,25,4 M25,2c-1.054,0-2.108,0.402-2.912,1.206 L18.354,6.94l4.624,4.624c0.628-0.37,1.335-0.556,2.041-0.556c1.017,0,2.032,0.386,2.809,1.163c1.316,1.316,1.509,3.316,0.607,4.85 l4.543,4.543c0.628-0.37,1.335-0.556,2.041-0.556c1.017,0,2.032,0.386,2.809,1.163c1.562,1.562,1.562,4.095,0,5.657 C37.047,28.609,36.024,29,35,29s-2.047-0.391-2.828-1.172c-1.316-1.316-1.509-3.316-0.607-4.85l-4.543-4.543 c-0.324,0.19-0.666,0.33-1.021,0.421v12.285c1.722,0.446,3,1.997,3,3.859c0,2.209-1.791,4-4,4s-4-1.791-4-4 c0-1.862,1.278-3.413,3-3.859V18.857c-0.669-0.173-1.305-0.505-1.828-1.028c-1.316-1.316-1.509-3.316-0.607-4.85L16.94,8.354 L3.206,22.088c-1.608,1.608-1.608,4.215,0,5.823l18.882,18.882C22.892,47.598,23.946,48,25,48s2.108-0.402,2.912-1.206 l18.882-18.882c1.608-1.608,1.608-4.215,0-5.823L27.912,3.206C27.108,2.402,26.054,2,25,2L25,2z"/>
                  </svg>
                  GIT, GITHUB & many others
                </div>
              </div>
            </div>
        </div>
      <div id="circle--wrapper">
          <img src='/image/pierre1.png' alt="pierre image" />
      </div>

      <div className="scroll">
        <p>scroll</p>
        <div className="scroll__line"></div>
      </div>
  </div>
)}
