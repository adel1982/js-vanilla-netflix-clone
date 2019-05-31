import './scss/main.scss'

const tabsItems = document.querySelectorAll('.tab-item')
const tabsContentItems = document.querySelectorAll('.tab-content-item')

tabsItems.forEach(tabsItem => tabsItem.addEventListener('click', selectItem ))

function selectItem(e) {
  removeBorder()
  hiddenContent()
  this.classList.add('tab-active')
  const tabContentItem = document.querySelector(`#${this.id}-content`)
  tabContentItem.classList.add('show')
}

function removeBorder() {
  tabsItems.forEach(tabsItem => tabsItem.classList.remove('tab-active'))
}

function hiddenContent() {
  tabsContentItems.forEach(tabContentItem => tabContentItem.classList.remove('show'))
}
