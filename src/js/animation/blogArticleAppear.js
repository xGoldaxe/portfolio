import {gsap} from 'gsap'

export function blogArticleAppear () {

	let tl = gsap.timeline()
	tl.to('.article', {
		x: 0,
		opacity: 1,
		ease: "power2.out",
		duration: 1,
		stagger: 0.2
	})
}