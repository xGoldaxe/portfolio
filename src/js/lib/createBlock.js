export default function createBlock(entry, style) {
    let block = document.createElement('div')
    for (const property in style) {
        block.style[property] = `${style[property]}`
    }
    entry.appendChild(block)
}