import {gsap} from 'gsap'

export function blogArticleAppear () {

	let tl = gsap.timeline()
	tl.from('.article', {
		translateX: '-50%',
		opacity: 0,
		ease: "power2.out",
		duration: 1,
		stagger: 0.2
    })
}