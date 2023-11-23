import React, { useEffect, useRef } from "react"
import Footer from "./Footer"
import Header from "./Header"
import TopBar from "./TopBar"

export default function Page({handleTransition, transitionOver, children}) {
	
	const pageRef = useRef(null)

	useEffect(() => {
		if (!pageRef)
			return
        pageRef.current.style.display = "none"
    }, [pageRef])

	useEffect(() => {
        if(transitionOver && pageRef) {
            pageRef.current.style.display = "flex"
        }
    }, [transitionOver, pageRef])
    
	return (
		<div className="about" ref={pageRef}>
			<header>
				<div className="headerLine"></div>
				<Header handleTransition={handleTransition}/>
			</header>
			<TopBar handleTransition={handleTransition}/>

			{children}

			<Footer/>
		</div>
	)
}