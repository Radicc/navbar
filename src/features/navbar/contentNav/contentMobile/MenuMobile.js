import ArrowRight from "../../../../_assets/ArrowRight.svg"
import Prehlady from "../../../../_assets/Prehlady.svg"
import Faktura from "../../../../_assets/Faktura.svg"
import Naklady from "../../../../_assets/Naklady.svg"
import Contact from "../../../../_assets/Contact.svg"
import Tool from "../../../../_assets/Tool.svg"
import HelpBigger from "../../../../_assets/HelpBigger.svg"

const dataLI = [
  { id: 1, name: "PREHĽADY", srcIcon: Prehlady, arrowIcon: ArrowRight },
  { id: 2, name: "FAKTÚRY", srcIcon: Faktura, arrowIcon: ArrowRight },
  { id: 3, name: "NÁKLADY", srcIcon: Naklady, arrowIcon: ArrowRight },
  { id: 4, name: "KONTAKTY", srcIcon: Contact, arrowIcon: ArrowRight },
  { id: 5, name: "NÁSTROJE", srcIcon: Tool, arrowIcon: ArrowRight },
  { id: 6, name: "NÁPOVEDA", srcIcon: HelpBigger, arrowIcon: ArrowRight },
]

const renderLI = dataLI
  .map((li) => {
    return `
      <li key=${li.id} class="flex justify-between w-full px-2 py-4">
        <span class="flex gap-3">
          <img src=${li.srcIcon} />
          <a class="text-midnight font-bold">${li.name}</a>
        </span>
        <img src=${li.arrowIcon} />
      </li>`
  })
  .join("")

const MenuMobile = () => {
  return `
<div class="animate-slide-in h-full bg-pureWhite">
  <div
    class="flex items-center justify-between px-5 bg-pureWhite border-b h-14 drop-shadow-xl shadow-shadow"
  >
    <h3 class="text-[#293040] font-medium">Menu</h3>
    <img id="closeMenu" src="./src/_assets/Close.svg"/>
  </div>
  <div class="px-5 pt-10">
    <div class="relative flex items-center w-full">
      <input
        id="search"
        placeholder="Vyhľadať faktúru, firmu, kontakt..."
        class="w-full h-10 px-3 text-sm bg-grayStyle rounded-full"
      />
      <span
        class="absolute flex items-center justify-start p-0.5 text-center bg-blue-400 rounded-full right-3"
      >
        <img src="./src/_assets/Search.svg" />
      </span>
    </div>
  </div>

  <div class="flex p-4">
    <ul class="w-full font-medium divide-y-2">
      ${renderLI}
    </ul>
  </div>
</div>
`
}

export default class MenuMobileElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = MenuMobile()
  }
}

customElements.define("moblie-nav-menu", MenuMobileElement)
