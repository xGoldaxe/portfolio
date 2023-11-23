export default function headerAppear(tl, speed, label = "") {
    //mobile nav
    tl.to('.topBar', {
        opacity: 1,
        ease: 'power4.in',
        duration: 0.5,
        delay: 0.5
    }, label)

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
}