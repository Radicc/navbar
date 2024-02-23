const ContentWeb = () => {
  const content = `
  <div class="hidden gap-5 xl:flex justify-between xl:px-64 bg-pureWhite">
    <img class="p-5 w-[50%] xl:w-auto" src="./src/_assets/Logo_Superfaktura.svg"/>
  
   <div class="flex gap-5"> 
    <div class="flex w-[25em] relative items-center">
      <input 
        placeholder="Vyhľadať faktúru, firmu, kontakt..."
        class="w-full h-10 px-3 text-sm bg-grayStyle rounded-full"
      />
      <span class="absolute flex items-center justify-start p-0.5 text-center bg-blue-400 rounded-full right-3">
        <img src="./src/_assets/Search.svg" />
      </span>
    </div>
  
    <ul class="flex items-center justify-center text-[#293040] divide-x font-medium">
      <li class="flex items-center gap-1 px-3">
        <img class="h-4" src="./src/_assets/Help.svg" alt="help" />
        <a class="cursor-pointer">Nápoveda</a>
      </li>
      <li class="flex items-center gap-1 px-3">
        <img src="./src/_assets/Company.svg" alt="company" />
        <a class="cursor-pointer">The Walt Disney Company</a>
        <img class="h-3" src="./src/_assets/Icons.svg" alt="icons" />
      </li>
      <li class="flex items-center gap-1 px-3">
        <img src="./src/_assets/Avatar.svg" alt="avatar" />
        <a class="cursor-pointer">Môj profil</a>
        <img class="h-3" src="./src/_assets/Icons.svg" alt="icons" />
      </li>
    </ul>
    </div>
  </div>
  `
  return content
}

export default class ContentWebNavElement extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ContentWeb()
  }
}

customElements.define("content-web-nav", ContentWebNavElement)
