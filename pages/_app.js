import main from '../src/styles/main.scss'
import Router, { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import mainTransition from '../src/js/transition/mainTransition'
import transition from '../src/js/transition/transition'
import Head from 'next/head'
import Test from '../components/Test'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [transitionOver, setTransitionOver] = useState(true)
  const [loadingPage, setLoadingPage] = useState(true)
  
  
  // Router.events.on('routeChangeStart', () => setLoadingPage(true)); 
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      setLoadingPage(false)
    });
  }, [])

  useEffect(() => {
    console.log(loadingPage)
      if(loadingPage === false && transitionOver === false) {
        const promise1 = new Promise(resolve => {
          transition(resolve, 'reverseTransition0')
        })
        promise1.then(()=>{
          setLoadingPage(false)
          setTransitionOver(true)
        })
      }
  }, [loadingPage])

  
  function handleTransition(href) {
    if(router.pathname !== href) {
      setLoadingPage(false)
      const promise = new Promise(resolve => {
        transition(resolve, 'transition0')
      })
      promise.then(()=>{
        setTransitionOver(false)
        router.push(href)
        setLoadingPage(true)
      })
    }
  }

  return <>
    {/* <Test /> */}
    <Head>
      <title>PIERRE EVL - Portfollio</title>
      <meta name="viewport" content="initial-scale=1, minimum-scale=1" />
    </Head>
    <Component {...pageProps} handleTransition={handleTransition} transitionOver={transitionOver}/>
  </>
}

export default MyApp
