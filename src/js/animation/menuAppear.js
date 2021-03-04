import {gsap} from 'gsap'
import createBlock from "../lib/createBlock"
import burgerTransition from './burgerTransition';

export default function menuAppear(resolve, value = true) {

    var tl = gsap.timeline({
        onReverseComplete: function() {
            resolve()
        }
    });
    tl.addLabel('firstLabel')
    tl.add(burgerTransition(), "firstLabel")
    
    tl.from('.menu__bg div', {
        scaleY: 0,
        ease: 'power3.out',
        duration: 0.3,
        stagger: 0.05
    }, 'firstLabel')
    tl.from('.menuLink', {
        x: -50,
        opacity: 0,
        ease: 'power4.out',
        duration: 0.5,
        stagger: 0.1
    })
    tl.from('.menu__socials', {
        xPercent: -50,
        opacity: 0,
        ease: 'power2.out',
        duration: 0.5,
        stagger: 0.1
    })


    if(value !== true) {
        tl.reverse(value)
    }
    return tl
}
