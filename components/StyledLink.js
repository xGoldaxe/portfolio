import {gsap} from 'gsap'
import React, { useEffect, useRef } from 'react'

export default function StyledLink({children, onClick}) {
    const ref = useRef(null)

    const onEnter = () => {
        gsap.to(ref.current, {
            scaleX: 1,
            duration: 1,
            ease: "power2.out",
            duration: 0.3,
            onStart: function(){
                ref.current.style.transformOrigin = 'left center'
            }
        })
    }

    function onLeave() {
        gsap.to(ref.current, {
            scaleX: 0,
            duration: 1,
            ease: "power2.out",
            duration: 0.3,
            onStart: function(){
                ref.current.style.transformOrigin = 'right center'
            }
        })
    }
    
    
    return (
        <div className="link" onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <p>{children}</p>
            <div className="link__line" ref={ref}></div>
        </div>
    )
}
