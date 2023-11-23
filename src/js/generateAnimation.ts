import { gsap } from "gsap";

export default function generateAnimation(funcs) {
    var tl = gsap.timeline({repeat: -1});
    
    let percentage = {x: 0}
    funcs.forEach((func) => {
        tl.to(percentage , {
            duration: func.duration,
            ease: func.ease,
            x: 1,
            //onUpdtae
            onUpdate: function() {
                func.func(percentage.x)
            },
            onComplete: function() {
                percentage.x = 0
            }
        })
    })
}
