function collapseBtnsEvt() {
  let collapseBtns = document.querySelectorAll("#collapse-toggle-btns button")

  collapseBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let icon = btn.querySelector("i")
      icon.classList.toggle("fa-minus")
      icon.classList.toggle("fa-plus")
    })
  })
}
collapseBtnsEvt()

function addToCart() {
  let heartIcons = document.querySelectorAll(".heart-circle")
  let element = document.querySelector('[data-bs-target="#modal-1"]')

  // Change the data-bs-target value

  window.addEventListener("resize", () => {
    if (window.innerWidth > 576) {
      element.removeAttribute("data-bs-target")
      console.log("removed")
    } else {
      element.setAttribute("data-bs-target", "#modal-1")
      console.log("added")
    }
  })
  console.log(element, window.innerWidth)

  let color = "red"
  heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener("click", (e) => {
      let icon = heartIcon.querySelector("i")
      icon.classList.toggle("fa-solid")
      if (color === "red") {
        icon.style.color = color
        color = "#7a7a7a"
      } else {
        icon.style.color = color
        color = "red"
      }
    })
  })
}
addToCart()
