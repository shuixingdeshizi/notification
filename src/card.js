class Card {
  constructor (message) {
    var div = document.createElement('div')
    div.dataset.name = 'card'
    div.style.cssText = `
      width: auto
      height: 1rem;
      border-raidus: .2rem;
      border: 1px solid green;
      background: #fff;
      line-height: 1;
      padding: .2rem;
      margin: .1rem;
      border-radius: .1rem;
      font-size: .3rem;
      color: green;
    `
    div.innerHTML = message

    this[0] = div
    this.length = 1
  }

  remove () {
    let card = this[0]
    console.log(card)
    console.log(card.parentNode)
    card.parentNode.removeChild(card)
  }
}

export {
  Card
}