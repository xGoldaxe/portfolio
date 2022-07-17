import {gsap} from 'gsap'
import headerAppear from './headerAppear'
import menuAppear from './menuAppear'

export function articlePageAppear() {

	let tl = gsap.timeline()

	let otherTl = gsap.timeline()
    headerAppear(otherTl, 0.7)
}