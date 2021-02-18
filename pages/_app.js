import main from '../src/styles/main.scss'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import mainTransition from '../src/js/transition/mainTransition'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const [transitionOver, setTransitionOver] = useState(true)
  
  useEffect(() => {

  }, [])

  function transitionSwap(href) {
    setTransitionOver(false)
    router.push(href)
  }
  function handleTransition(href) {
    const promise = new Promise(resolve => {
      mainTransition(resolve,() => transitionSwap(href))
    })
    promise.then(()=>{
      setTransitionOver(true)
    })
  }

  return <>
    <Head>
      <title>PIERRE EVL - Portfollio</title>
      <meta name="viewport" content="initial-scale=1, minimum-scale=1" />
    </Head>
    <Component {...pageProps} handleTransition={handleTransition} transitionOver={transitionOver}/>
  </>
}

export default MyApp
