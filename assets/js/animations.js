const logo = document.querySelector('#bulb')
const bgColor = document.querySelector('div.logo')
const white = 'rgb(255, 255, 255)'
const yellow = 'rgb(247, 239, 153)'

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
