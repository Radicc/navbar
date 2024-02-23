import SubNav from "./SubNav"
import { mainList } from "./mainData"

const renderMain = mainList
  .map(
    (list) =>
      `<li id="mainItem-${
        list.id
      }" class="group py-4 px-6  hover:bg-[#003A7F] cursor-pointer text-midnight font-bold hover:text-gray-50" >
      <div class="flex">
        <button>${list.name}</button>
      </div>
      <div id="subNavContainer" class="hidden absolute mt-4 w-screen left-0 bg-[#003A7F] group-hover:block">
      ${SubNav(list.data)}</div>
    </li>
    `
  )
  .join("")

const MainNav = () => {
  return `
  <div id="mainNavContainer" class="flex flex-col w-full">
    <div id="firstNav" class="xl:flex hidden bg-[#F2F2F4] items-center justify-between px-64">
      <ul class=" flex font-medium">${renderMain}</ul>
        <button class="flex items-center py-4 gap-3 px-6 font-medium text-gray-100 bg-[#0A7EC7]">
          <img src="./src/_assets/Add.svg" /> Vytvoriť nový
        </button>
    </div>
    
  </div>
  `
}

export default class MainNavElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = MainNav()
  }
}
customElements.define("main-nav", MainNavElement)
