import {gsap} from 'gsap'
import headerAppear from './headerAppear';

export default function projectAppear(resolve) {
    var tl = gsap.timeline({
        onComplete: function(){
           resolve()
        }
    });
    tl.from('.projects__info__scroller__bar', {
        transformOrigin: "top center",
        scaleY: 0,
        duration: 0.5,
        ease: 'power4.in',
    })
    let texts: Element[] = []

    texts.push(...document.querySelectorAll('.projects__info__desc__textContainer'))
    texts.push(...document.querySelectorAll('.projects__info__scroller__previous p'))
    texts.push(...document.querySelectorAll('.projects__info__scroller__previous h4'))
    tl.addLabel("firstLabel")
    tl.from(texts, {
        opacity: 0,
        xPercent: 50,
        duration: 0.5,
        ease: 'power4.out',
        stagger: {
            each: 0.1,
            from: "random",
        }
    }, "firstLabel")
    tl.from('.projects__image', {
        opacity: 0,
        xPercent: 50,
        duration: 1,
        ease: 'power4.out',
    }, "firstLabel")
    tl.to('.projects__image__mask', {
        transformOrigin: "left center",
        scaleX: 0,
        duration: 0.5
    })
    tl.addLabel('secondLabel')
    tl.from('.projects__image__topDecoration', {
        x: 0,
        y: 0,
        ease: 'power4.out',
        duration: 0.5
    }, "secondLabel")
    tl.from('.projects__image__bottomDecoration', {
        x: 0,
        y: 0,
        ease: 'power4.out',
        duration: 0.5
    }, "secondLabel")

    //second step nav
    headerAppear(tl, 0.7, "firstLabel")
    tl.from('.scroll', {
        x: 20,
        opacity: 0,
    })  

    return tl
}