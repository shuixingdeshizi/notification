import { Card } from './card'

class Notification {
    constructor (el, options = {}) {
        this.wrapper = typeof el === 'string' ? document.querySelector(el) : el
        this.options = options

        this.wrapperOffsetHeight = this.wrapper.offsetHeight
        this.wrapperOffsetWidth = this.wrapper.offsetWidth

        this.maxCount = options.maxCount || 5

        this.notifys = []
    }
    push (message) {
        var card = new Card(message)

        if (this.notifys.length >= this.maxCount) {
            this.remove(this.notifys.length - 1)
        }

        this.notifys.push(card)
        this.wrapper.appendChild(card[0])

    }

    remove (count = 1) {
        let step =  () => {
            var node = this.notifys.shift()
            node && node.remove()
            count--
            console.log(count)
            if (count > 0) {
                setTimeout(step, 100)
            }
        }
        step()
    }

    clear (count) {
        this.remove(this.notifys.length)
    }
}

export default Notification