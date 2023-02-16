const logo = document.querySelector('#bulb')
const bgColor = document.querySelector('div.logo')

const white = 'rgb(255, 255, 255)'
const yellow = 'rgb(247, 239, 153)'
const bulb = document.querySelector('i.fa')
bulb.addEventListener('click', handleClick)

function colorChange() {
  logo.style.color = yellow
  setInterval(flasher, 1500)
}
setTimeout(colorChange, 2000)

function flasher() {
  if (
    logo.style.color === yellow &&
    bgColor.style.backgroundColor === 'black'
  ) {
    logo.style.color = white
    bgColor.style.backgroundColor = 'white'
  } else {
    logo.style.color = yellow
    bgColor.style.backgroundColor = 'black'
  }
}

function handleClick() {
  if (bulb.className === 'fa fa-lightbulb fa-8x fa-spin') {
    bulb.className = 'fa fa-lightbulb fa-8x'
  } else bulb.className = 'fa fa-lightbulb fa-8x fa-spin'
}

// This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
// 									This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
// 									This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>. Finally, <a href="#">this is a link</a>.
