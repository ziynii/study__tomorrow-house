const myMenu = document.querySelector('.my-menu')
const myMenuButton = document.querySelector('.my-menu-button')

function toggleMyMenu() {
  if (!myMenu.classList.contains('is-active')) {
    window.addEventListener('click', closeMyMenuOnClickingOutside)
  }
  myMenu.classList.toggle('is-active')
}

myMenuButton.addEventListener('click', toggleMyMenu)

function closeMyMenuOnClickingOutside(event) {
  if (!myMenu.contains(event.target)) {
    myMenu.classList.remove('is-active')
    window.removeEventListener('click', closeMyMenuOnClickingOutside)
  }
}
