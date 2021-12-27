function showMenu(){
    if (navbar.style.display == "flex"){
        navbar.style.display = "none"
    }else{
        navbar.style.display = "flex"
    }
}

const closeMenu = () => navbar.style.display = "none"

function changeActiveItem(){
    const projects = document.getElementById("projects")
    const about = document.getElementById("about")
    const contact = document.getElementById("contact")
    let isActive = document.getElementById("active")
    isActive.removeAttribute("id","active")
    let heightScreen = window.scrollY
    if (heightScreen < projects.offsetTop){
        navbar.children[0].setAttribute("id","active")
    }else if(heightScreen < about.offsetTop){
        navbar.children[1].setAttribute("id","active")
    }else if(heightScreen < contact.offsetTop){
        navbar.children[2].setAttribute("id","active")
    }else{
        navbar.children[3].setAttribute("id","active")
    }
}

function changeWidth(){
    if (window.innerWidth < 1024){
        navbar.style.display = "none"
        for (let i=0; i<navbar.children.length; i++){
            navbar.children[i].addEventListener("click", closeMenu)
        }
    }else{
        navbar.style.display = "flex"
        for (let i=0; i<navbar.children.length; i++){
            navbar.children[i].removeEventListener("click", closeMenu)
        }
    }
}

function changeColors(){
    if (html.classList.contains("darkTheme")){
        html.classList.remove("darkTheme")
    }else{
        html.classList.add("darkTheme")
    }
}

const html = document.querySelector('html')
const darkMode = document.getElementById("darkMode")
const navbar = document.getElementById("navbar")
const bars = document.getElementById("bars")

document.addEventListener("scroll", changeActiveItem)
window.addEventListener("resize", changeWidth)
darkMode.addEventListener("click", changeColors)
bars.addEventListener("click", showMenu)

changeWidth()