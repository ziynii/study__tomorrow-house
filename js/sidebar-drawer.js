const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode

  drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach((drawerMenuButton) => {
  drawerMenuButton.addEventListener('click', toggleDrawerMenu)
})
