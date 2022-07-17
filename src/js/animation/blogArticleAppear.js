import {gsap} from 'gsap'
import headerAppear from './headerAppear'
import menuAppear from './menuAppear'

export function blogArticleAppear () {

	let tl = gsap.timeline()


	tl.to('.blog__title', {
		opacity: 1,
		ease: "power2.out",
		duration: 0.2,
		delay: 0.2
	})
	tl.to('.blog__subtitle', {
		opacity: 1,
		ease: "power2.out",
		duration: 0.2,
	})
	tl.to('.article', {
		x: 0,
		opacity: 1,
		ease: "power2.out",
		duration: 0.5,
		stagger: 0.3
	}, 'firstLabel')

	let otherTl = gsap.timeline()
    headerAppear(otherTl, 0.7)
}