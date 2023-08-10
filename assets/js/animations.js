const logo = document.querySelector('#bulb')
const bgColor = document.querySelector('div.logo')
const resume = document.querySelector('.resume')
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close-button')
const bulb = document.querySelector('i.fa')
const view = document.querySelector('.view')

const white = 'rgb(255, 255, 255)'
const yellow = 'rgb(247, 239, 153)'
let modalOpen = true

view.addEventListener('click', enlargeResume)
bulb.addEventListener('click', handleClick)
closeButton.addEventListener('click', enlargeResume)
resume.addEventListener('click', enlargeResume)
resume.addEventListener('mouseover', changePointer)

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

function changePointer() {
  resume.style.cursor = 'zoom-in'
}

function enlargeResume() {
  modalOpen = true
  // console.log('clicked')
  modal.classList.toggle('show-modal')
  window.scroll({ top: 0, left: 0 })
  modal.className === 'modal' ? resume.scrollIntoView() : null

  if (modalOpen === true) {
    document.querySelector('body').addEventListener('click', closeModal)
  }
}

function closeModal() {
  modalOpen = false
  modal.className = 'modal'
}
