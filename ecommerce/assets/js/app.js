// Navbar - Animações
var header_menuItens = document.getElementById('header_menuItens')
header_menuItens.style.maxHeight = "0px"

function menuCelular(){
    if(header_menuItens.style.maxHeight == "0px"){
        header_menuItens.style.maxHeight = "200px"
    } else {
        header_menuItens.style.maxHeight = "0px"
    }
}
// fim Navbar - Animações