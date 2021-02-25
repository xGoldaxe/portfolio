import {gsap} from "gsap"
import createBlock from "../lib/createBlock"


export function transition1 (resolve, entry) {
    createBlock(entry, {
        width: '100%',
        height: '100%',
        background: '#c1c1c1',
        position: 'absolute',
    })
    createBlock(entry, {
        width: '100%',
        height: '100%',
        background: '#debc7c',
        position: 'absolute',
    })
    let tl = gsap.timeline({
        onComplete: function() {
            resolve()
        }
    })
    tl.addLabel('firstLabel')
    const allBlocks = document.querySelectorAll('#entry div')
    tl.from(allBlocks[0], {
        xPercent: -100,
        ease: "power2.in",
        duration: 0.7,
    }, 'firstLabel')
    tl.from(allBlocks[1], {
        xPercent: -100,
        ease: "power4.in",
        duration: 0.7,
    }, 'firstLabel')
}

export function reverseTransition1 (resolve, entry) {
    let tl = gsap.timeline({
        onComplete: function() {
            resolve()
            entry.remove()
        }
    })
    const allBlocks = document.querySelectorAll('#entry div')
    tl.addLabel('firstLabel')
    tl.to(allBlocks[1], {
        xPercent: 100,
        ease: "power2.in",
        duration: 0.7,
    }, 'firstLabel')
    tl.to(allBlocks[0], {
        xPercent: 100,
        ease: "power4.in",
        duration: 0.7,
    }, 'firstLabel')
}