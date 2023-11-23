import { gsap } from 'gsap'
import headerAppear from './headerAppear'

export function aboutAppear() {

	let tl = gsap.timeline()

	tl.fromTo('.about__text', {
		opacity: 0,
		y: -150
	},{
		opacity: 1,
		y: 0,
		ease: "power2.out",
		duration: 0.5,
		delay: 0.2
	})

	let otherTl = gsap.timeline()
    headerAppear(otherTl, 0.7)
}