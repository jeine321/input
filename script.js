function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a tag img
  if (html.classList.contains("light")) {
    // se tiver light mode , adicionar light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // se tiver light mode , adicionar light
    img.setAttribute('src', './assets/avatar.png')
  }

 
}
