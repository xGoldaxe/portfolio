import { transition0, reverseTransition0 } from './transition0'
import { transition1, reverseTransition1 } from './transition1'

export default function transition(resolve, transName, direction = 0) {
    let entry: null | HTMLElement = document.getElementById('entry');

    if (!entry) {
        let newElt = document.createElement('div')
        newElt.id = 'entry'
        document.querySelector('body')?.appendChild(newElt)

        entry = document.getElementById('entry')
    }

    ALLTRANS[transName][direction](resolve, entry)
}

const ALLTRANS = {
    transition0: [transition0, reverseTransition0],
    transition1: [transition1, reverseTransition1]
}

