form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   let id = Date.now();
  let input2 = input.value;
  let add = `<div class="flex">
          <li id="text" class="list-none pl-5 text-2xl text-dark-600">
            ${input2}
          </li>
          <div class="btn ml-auto pr-5 flex gap-3">
            <button id="sav" class="text-lime-600 text-2xl">
              <i class="fa-solid fa-circle-check"></i>
            </button>
            <button id="edit" class="text-blue-600 text-2xl">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button id="del" class="text-red-600 text-2xl">
              <i class="fa-solid fa-circle-xmark"></i>
            </button>
          </div>
        </div>`;

  if (!input2) {
    input.setAttribute("placeholder", "Iltimos mant kiriting....");
    form.reset();
    if ((form = 1)) {
      return;
    }
  }

  table.innerHTML += add;
  e.target.reset();
});
function save() {
  text.innerHTML += ` <i class="fa-solid fa-check"></i>`;
}

reset.addEventListener("click", () => {
  table.innerHTML = "";
});
