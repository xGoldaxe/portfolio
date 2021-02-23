import {gsap} from "gsap"

export default function transition(resolve, animation) {
    if(!document.getElementById('entry')) {
        let newElt = document.createElement('div')
        newElt.id = 'entry'
        document.querySelector('body').appendChild(newElt)
        
        const entry = document.getElementById('entry')
    }


    if(animation === 'transition0') {
        transition0(resolve, entry)
    } else {
        reverseTransition0(resolve, entry)
    }
}



function createBlock(entry, style) {
    let block = document.createElement('div')
    for (const property in style) {
        block.style[property] = `${style[property]}`
    }
    entry.appendChild(block)
}

function transition0 (resolve, entry) {
    let max = 10
    for(let i = 0; i < max; i++) {
        createBlock(entry, {
            width: 100/max +'%', 
            height: '100%', 
            background: '#c1c1c1', 
            position: 'absolute',
            left: 100/max*i + '%',
            transform: 'scaleY(0)',
            transformOrigin: 'bottom right'
        })
    }
    let tl = gsap.timeline({
        onComplete: function() {
            resolve()
        }
    })
    tl.to('#entry div', {
        scaleY: 1,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.1
    })
}

function reverseTransition0 (resolve, entry) {
    let tl = gsap.timeline({
        onComplete: function() {
            resolve()
            entry.remove()
        }
    })
    tl.to('#entry div', {
        scaleX: 0,
        ease: "power2.out",
        duration: 0.5,
        stagger: 0.05
    })
}