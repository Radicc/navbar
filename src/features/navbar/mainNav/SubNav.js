const SubNav = (data) => {
  return `
  <div id="subNav" class="xl:block hidden w-full  px-64 text-gray-200 font-medium">
    <ul class="flex items-center w-full h-full">
      ${data
        .map(
          (option) =>
            `<li key=${option.id}>
                <a class="group/a relative flex justify-center w-full h-full text-offWhite hover:text-pureWhite py-4 px-6 ">
                  ${option.name} <img class="absolute bottom-0 hidden group-hover/a:block"  src="./src/_assets/Vector.svg"/>
                </a>
              </li>`
        )
        .join("")}
    </ul>
  </div> 
  `
}
export default SubNav
