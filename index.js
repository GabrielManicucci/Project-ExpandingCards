const card = document.querySelectorAll(".card")

card.forEach(card => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("active")) {
      removeActiveClasses()
      card.classList.add("active")
    } else {
      console.log("contém a classe active")
    }
  })
})

function removeActiveClasses() {
  card.forEach( card => card.classList.remove('active'))
}