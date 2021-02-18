import {gsap} from 'gsap'

export default function scroll() {
    var tl = gsap.timeline({repeat: -1});

    tl.fromTo('.scroll__line', {scaleX: 0}, {
        scaleX: 1,
        duration: 1,
        ease: "expo.out"
    })
    tl.to('.scroll__line', {
        transformOrigin: "center right",
        scaleX: 0,
        duration: 1,
        ease: "expo.out"
    })
    
}
