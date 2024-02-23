import "./contentWeb/ContentWeb"
import "./contentMobile/ContentMobileNav"

const ContentNav = () => {
  return `
  <div id="contentNav" >

    <content-web-nav></content-web-nav>
    <content-mobile-nav></content-mobile-nav>
    
  </div>
  `
}

export default class ContentNavElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ContentNav()
  }
}

customElements.define("content-nav", ContentNavElement)
