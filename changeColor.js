var ChangeColor = document.querySelector(".ChangeBodyColor")

function changeColorToYellow() {
  ChangeColor.classList.remove("Blue")
  ChangeColor.classList.remove("Green")
}

function changeColorToGreen() {
  ChangeColor.classList.add("Green")
  ChangeColor.classList.remove("Blue")
}

function changeColorToBlue() {
  ChangeColor.classList.add("Blue")
  ChangeColor.classList.remove("Green")
}
