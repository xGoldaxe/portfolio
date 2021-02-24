import {gsap} from 'gsap'
import headerAppear from './headerAppear';

export default async function projectAppear(resolve) {
    var tl = gsap.timeline({
        onComplete: function(){
           resolve()
        }
    });
    tl.from('.project__info__scroller__bar', {
        transformOrigin: "top center",
        scaleY: 0,
        duration: 0.5,
        ease: 'power4.in',
    })
    let texts = []
    texts.push(document.querySelectorAll('.project__info p'))
    texts.push(document.querySelectorAll('.project__info h3'))
    texts.push(document.querySelectorAll('.project__info h4'))
    tl.from(texts, {
        opacity: 0,
        xPercent: 50,
        duration: 0.5,
        ease: 'power4.out',
        stagger: 0.05
    })
    tl.from('.project__image', {
        opacity: 0,
        xPercent: 50,
        duration: 1,
        ease: 'power4.out',
    })
    tl.to('.project__image__mask', {
        transformOrigin: "left center",
        scaleX: 0,
        duration: 0.5
    })
    tl.addLabel('firstLabel')
    tl.from('.project__image__topDecoration', {
        x: 0,
        y: 0,
        ease: 'power4.out',
        duration: 0.5
    }, "firstLabel")
    tl.from('.project__image__bottomDecoration', {
        x: 0,
        y: 0,
        ease: 'power4.out',
        duration: 0.5
    }, "firstLabel")

    //second step nav
    headerAppear(tl, 0.7, "firstLabel")
    tl.from('.scroll', {
        x: 20,
        opacity: 0,
    })  
}