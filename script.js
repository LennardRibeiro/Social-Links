function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("light")

//pegar a tag img
 const img = document.querySelector("#profile img")

//substituir a imagem
 if(html.classList.contains('light')) {
//se tiver light mode, adicionar a imagem light
        img.setAttribute('src', './assets/avatarLennard.png') 
        img.setAttribute('alt', 'uma foto sorrindo')
} else {
//se tiver sem o light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatarDark.png')
    img.setAttribute('alt', 'Um avatar de Lennard sorrindo em 3D')
}
}