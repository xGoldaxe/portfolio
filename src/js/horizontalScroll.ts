import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function horizontalScroll() {
    return gsap.to('.boxSection__projects', {
        scrollTrigger: {
            trigger: ".boxSection",
            scrub: 1,
            pin: '.boxSection',
            // @ts-ignore
            end: () => "+=" + document.querySelector(".boxSection__projects").offsetWidth,
        },
        xPercent: -100,
        x: window.innerWidth
    })
}

