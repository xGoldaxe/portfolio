import generateAnimation from './generateAnimation'

export default function circle(entry, numberOfTurn,numberOfArc,duration, bgColor, color) {
    let newCanvas = document.querySelector(entry)
    let newCtx = document.querySelector(entry).getContext('2d')
    //resize listener
    generateAnimation([{
        duration: duration/2,
        ease: "slow(0.3, 0.4, false)",
        func: (percentage) => drawCircle(percentage, newCtx, newCanvas, bgColor, color, numberOfTurn, numberOfArc)
    }
    ,{
        duration: duration/2,
        ease: "power1.out",
        func: (percentage) => deleteArc(percentage, newCtx, newCanvas, bgColor, color)
    }])
}

function drawCircle(percentage, newCtx, newCanvas, bgColor, color, numberOfTurn, numberOfArc) {
    //clear
    newCtx.clearRect(0,0,newCanvas.width, newCanvas.height)

    //circle
    newCtx.lineWidth = 2
    newCtx.strokeStyle = bgColor
    newCtx.clearRect(0,0,newCanvas.width, newCanvas.height)
    newCtx.beginPath()
    newCtx.arc(newCanvas.width/2,newCanvas.height/2, newCanvas.width/2-2, 0, (Math.PI/180)*360)
    newCtx.stroke()
    newCtx.closePath()

    //corner
    newCtx.save()
    newCtx.lineWidth = 5*percentage
    newCtx.strokeStyle = color
    //3 arc
    for(let i = 0; i<numberOfArc; i++) {
        let radiantStart = (Math.PI/180)*i*(360/numberOfArc)
        newCtx.beginPath()
        newCtx.arc(newCanvas.width/2,newCanvas.height/2, newCanvas.width/2-3, radiantStart + (Math.PI/180)*(numberOfTurn*360*percentage), radiantStart + (Math.PI/180)*(numberOfTurn*360*percentage+(360/numberOfArc)*percentage))
        newCtx.stroke()
        newCtx.closePath()
    }
    newCtx.restore()
}


function deleteArc(percentage, newCtx, newCanvas, bgColor, color) {
    //clear
    newCtx.clearRect(0,0,newCanvas.width, newCanvas.height)

    //circle
    newCtx.lineWidth = 2
    newCtx.strokeStyle = bgColor
    newCtx.clearRect(0,0,newCanvas.width, newCanvas.height)
    newCtx.beginPath()
    newCtx.arc(newCanvas.width/2,newCanvas.height/2, newCanvas.width/2-2, 0, (Math.PI/180)*360)
    newCtx.stroke()
    newCtx.closePath()

    //corner
    if(percentage!==1) {
        newCtx.save()
        newCtx.lineWidth = 5 - (5*percentage) 
        newCtx.strokeStyle = color

        //full circle
        newCtx.beginPath()
        newCtx.arc(newCanvas.width/2,newCanvas.height/2, newCanvas.width/2-3, 0, (Math.PI/180)*360)
        newCtx.stroke()
        newCtx.restore()
    }
}