import { gsap } from 'gsap'
import headerAppear from './headerAppear'

export function articlePageAppear() {
	let otherTl = gsap.timeline()
    headerAppear(otherTl, 0.7)
}