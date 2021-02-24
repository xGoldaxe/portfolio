import {gsap} from 'gsap'

export default async function projectTransiton(reverse = false) {
    return new Promise(resolve => {
        var tl = gsap.timeline({
            onComplete: function(){
                // return tl
                resolve(tl)
            }
        });
        tl.addLabel('firstLabel')
        if(!reverse) {
            tl.to('.projects__image__topDecoration', {
                x: 0,
                y: 0,
                ease: 'power4.out',
                duration: 0.5
            }, "firstLabel")
            tl.to('.projects__image__bottomDecoration', {
                x: 0,
                y: 0,
                ease: 'power4.out',
                duration: 0.5
            }, "firstLabel")
            tl.to('.projects__image__mask', {
                transformOrigin: "right center",
                ease: 'power1.out',
                scaleX: 1,
                duration: 0.5
            }, "firstLabel")
            //text
            tl.to('.projects__info__scroller__previous', {
                opacity: 0,
                ease: 'power1.out',
                duration: 0.5,
            }, "firstLabel")
            let allTexts = [...document.querySelectorAll('.projects__info__desc__textContainer')].map((text)=>text.firstChild)
            allTexts.forEach(text => tl.to(text, {
                y: text.parentNode.offsetHeight,
                duration: 0.5,
                ease: 'power1.out',
            }, "firstLabel"))
        } else {
            let allTexts = [...document.querySelectorAll('.projects__info__desc__textContainer')].map((text)=>text.firstChild)
            allTexts.forEach(text => tl.fromTo(text, {
                y: -text.parentNode.offsetHeight
            },{
                y: 0,
                duration: 0.5,
                ease: 'power1.out',
            }, "firstLabel"))
            tl.to('.projects__info__scroller__previous', {
                opacity: 1,
                ease: 'power1.out',
                duration: 0.5,
            }, "firstLabel")
            //image
            tl.to('.projects__image__topDecoration', {
                x: -15,
                y: -15,
                ease: 'power4.out',
                duration: 0.5
            }, "firstLabel")
            tl.to('.projects__image__bottomDecoration', {
                x: 15,
                y: 15,
                ease: 'power4.out',
                duration: 0.5
            }, "firstLabel")
            tl.to('.projects__image__mask', {
                transformOrigin: "left center",
                ease: 'power1.out',
                scaleX: 0,
                duration: 0.5
            }, "firstLabel")
        }
        
      });
}