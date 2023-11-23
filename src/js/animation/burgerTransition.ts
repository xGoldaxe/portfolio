import {gsap} from 'gsap'

export default function burgerTransition() {
    var tl = gsap.timeline({});
    let bar = document.querySelectorAll('.animatedBurger div')
    tl.addLabel('firstLabel')
    tl.fromTo(bar[1], {        
        scaleX: 1,
        opacity: 1}, 
    {
        scaleX: 0,
        opacity: 0
    }, "firstLabel")
    tl.fromTo([bar[0]],  {        
        rotate: 0,
        y: 0},
    {
        rotate: 45,
        y: 11.5
    }, "firstLabel")
    tl.fromTo([bar[2]], {        
        rotate: 0,
        y: 0},
    {
        rotate: -45,
        y: -11.5,
    }, "firstLabel")
    
    return tl
}