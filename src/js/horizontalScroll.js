import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export default function horizontalScroll() {
    return gsap.to('.boxSection--container', {
        scrollTrigger: {
            trigger: ".boxSection--container",
            scrub: 1,
            pin: '.boxSection',
            end: () => "+=" +
            1.3 * document.querySelector(".boxSection--container").offsetWidth,
        },
        xPercent: -70,
    })
}

