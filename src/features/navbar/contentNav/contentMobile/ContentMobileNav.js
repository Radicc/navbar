import "./MenuMobile"

const onClickOpen = () => {
  const menu = document.getElementById("mobileMenu")
  if (menu) {
    menu.classList.remove("hidden")
    menu.classList.add("fixed")
  }
}

const onClickClose = () => {
  const menu = document.getElementById("mobileMenu")
  if (menu) {
    menu.classList.remove("fixed")
    menu.classList.add("hidden")
  }
}

const ContentMobileNav = () => {
  const content = `
<div class="flex xl:hidden flex-col items-center justify-between w-full bg-pureWhite">
  <div id="mobileMenu" class="hidden fixed top-0 z-10 w-screen h-screen bg-gray-100"><moblie-nav-menu></moblie-nav-menu></div>
  
  <div class="h-[80px] items-center flex w-full justify-between border-b border-b-dividerGray px-5">
    <img class="h-[36px]" src="./src/_assets/Logo_Superfaktura.svg"/>
    <div class="flex gap-2 px-2 xl:hidden">
      <img src="./src/_assets/AddMobile.svg" />
      <img src="./src/_assets/ProfileMobile.svg" />
      <img id="burgerMenu" src="./src/_assets/Menu.svg"/>
    </div>
  </div>
  
  <div class="flex w-full bg-[#FFFFFF] h-[48px] justify-between p-5">
    <div class="flex items-center gap-2">
      <img src="./src/_assets/CompanyMobile.svg" alt="companyMobile" />
      <h2 class="font-bold text-midnight">The Walt Disney Company</h2>
    </div>
      <img
       class="h-[20px]"
      src="./src/_assets/IconsMobile.svg"
      alt="iconsMobile"
    />
  </div>
</div>
  `

  return content
}

export default class ContentMobileNavElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ContentMobileNav()

    document.getElementById("burgerMenu").addEventListener("click", onClickOpen)
    document.getElementById("closeMenu").addEventListener("click", onClickClose)
  }
}

customElements.define("content-mobile-nav", ContentMobileNavElement)
