import {gsap} from "gsap"

export default function mainTransition(resolve,transitionSwap) {
    if(document.getElementById('entry')) {return}
    let newElt = document.createElement('div')
    newElt.id = 'entry';
    (document.querySelector('body') as HTMLElement).appendChild(newElt)
    
    const entry = document.getElementById('entry')

    if (!entry) {
        return;
    }

    let max = 10
    entry.style.display = "flex";
    for(let i = 0; i < max; i++) {
        createBlock(entry, {
            flexGrow: 1, 
            height: '100%', 
            background: '#c1c1c1', 
            transform: 'scaleY(0)',
            transformOrigin: 'bottom right'
        })
    }
    let tl = gsap.timeline({
        onComplete: function() {
            entry.remove()
            resolve()
        }
    })
    tl.to('#entry div', {
        scaleY: 1,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.1,
        onComplete: function() {
            transitionSwap()
        }
    })
    tl.to('#entry div', {
        scaleX: 0,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.05
    })
}

function createBlock(entry, style) {
    let block = document.createElement('div')
    for (const property in style) {
        block.style[property] = `${style[property]}`
    }
    entry.appendChild(block)
}