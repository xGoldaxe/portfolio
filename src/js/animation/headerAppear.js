export default function headerAppear(tl, speed, label = "") {
    tl.from('.headerLine', {
        scaleY: 0,
        ease: 'power4.in',
        duration: 1*speed
    }, label)
    tl.from('header nav p', {
        x: 20,
        opacity: 0,
        stagger: { // wrap advanced options in an object
            each: 0.2*speed,
            from: "end",
        }
    })
    //mobile nav
    tl.from('.topBar', {
        opacity: 0
    }, label)
}