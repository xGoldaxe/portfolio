import {gsap} from 'gsap'
import React, { useRef } from 'react'

export default function StyledLink({children, onClick, className = "link"}) {
    const ref = useRef(null)

    const onEnter = () => {
        gsap.to(ref.current, {
            scaleX: 1,
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
            ease: "power2.out",
            duration: 0.3,
            onStart: function(){
                ref.current.style.transformOrigin = 'right center'
            }
        })
    }
    
    
    return (
        <div className={className} onClick={onClick} onMouseEnter={onEnter} onMouseLeave={onLeave}>
            <p>{children}</p>
            <div className="link__line" ref={ref}></div>
        </div>
    )
}
