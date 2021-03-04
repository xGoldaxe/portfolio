import {gsap} from 'gsap'
import createCircle, { drawCircleAnimation } from '../circleAppear';
import headerAppear from './headerAppear';

export default async function homeAppear(resolve) {
    var tl = gsap.timeline({
        onComplete: function(){
           resolve()
        }
    });
    tl.from('.leftLineBg', {
        transformOrigin: 'left center',
        scaleX: 0,
        ease: "power2.in",
        duration: 1
    })
    tl.addLabel("secondStep")
    tl.from('.skill', {
        y: -100,
        ease: "power2.out",
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    }, "secondStep")
    let percentage = {x:0}
    tl.fromTo(percentage ,{x:0}, {
        duration: 1.2,
        ease: 'power4.in',
        x: 1,
        onStart: function() {
            createCircle()
        },
        onUpdate: function() {
            if(document.querySelector('#circle')) {
                drawCircleAnimation("#circle", percentage.x,"#c1c1c1")
            }
        },
    }, "secondStep")
    tl.addLabel("thirdStep")
    tl.from('.presentationText', {
        x: -50,
        opacity: 0,
        ease: 'power2.in',
    }, "thirdStep")
    tl.from('#circle--wrapper img', {
        x: 50,
        opacity: 0,
        ease: 'power2.in',
    }, "thirdStep")

    //last step
    tl.addLabel('lastStep')
    headerAppear(tl, 0.7, "lastStep")

}