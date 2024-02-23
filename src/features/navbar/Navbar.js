import "./contentNav/ContentNav.js"
import "./mainNav/MainNav.js"

class Navbar extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `
    <content-nav></content-nav>
    <main-nav></main-nav>
    `
  }
}

customElements.define("my-navigation", Navbar)
