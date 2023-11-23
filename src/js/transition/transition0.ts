import createBlock from "../lib/createBlock"
import {gsap} from "gsap"


export function transition0 (resolve, entry) {
    let max = 10
    for(let i = 0; i < max; i++) {
        createBlock(entry, {
            width: 100/max + 2 + '%', 
            height: '100%', 
            background: '#debc7c', 
            position: 'absolute',
            left: 100/max*i + '%',
            transform: 'scaleY(0)',
            transformOrigin: 'bottom right'
        })
    }
    let tl = gsap.timeline({
        onComplete: function() {
            resolve()
        }
    })
    tl.to('#entry div', {
        scaleY: 1,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.1
    })
}

export function reverseTransition0(resolve, entry: HTMLElement) {
    let tl = gsap.timeline({
        onComplete: function() {
            resolve()
            entry.remove()
        }
    })
    tl.to('#entry div', {
        scaleX: 0,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.05
    })
}