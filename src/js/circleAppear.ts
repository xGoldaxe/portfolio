import generateAnimation from './generateAnimation'

export default function createCircle() {
    let createdCanvas = document.createElement('canvas')
    createdCanvas.width = (document.querySelector('#circle--wrapper') as HTMLDivElement).offsetWidth
    createdCanvas.height = (document.querySelector('#circle--wrapper') as HTMLDivElement).offsetWidth
    createdCanvas.id = "circle"
    let newCanvas = (document.querySelector('#circle--wrapper') as HTMLDivElement).appendChild(createdCanvas)
    //resize listener
    window.addEventListener('resize', () => resize(newCanvas,'#circle--wrapper'))
}

export function drawCircleAnimation(entry, percentage, color) {
    // duration: duration/2,
    // ease: "slow(0.3, 0.4, false)",
    // func: (percentage)=> {
    //clear
    let canvas = document.querySelector(entry)
    let ctx = canvas.getContext('2d')
    ctx.clearRect(0,0,canvas.width, canvas.height)

    //circle
    ctx.lineWidth = 2
    ctx.strokeStyle = color
    ctx.clearRect(0,0,canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(canvas.width/2,canvas.height/2, canvas.width/2-2, (Math.PI/180)*180, (Math.PI/180)*180 + (Math.PI/180)*360*percentage)
    ctx.stroke()
    ctx.closePath()
}

function resize(canvas,query) {
    if(document.querySelector(query)) {
        canvas.width = document.querySelector(query).offsetWidth
        canvas.height = document.querySelector(query).offsetWidth
    }
}