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
