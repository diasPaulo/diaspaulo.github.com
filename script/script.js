const loadThemeColor = (isDark) => isDark == "true" ? html.classList.add("darkTheme") : html.classList.remove("darkTheme")
const showMenu = () => navbar.style.display == "flex" ? navbar.style.display = "none" : navbar.style.display = "flex"
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
    if (window.innerWidth < 1024 && window.location.pathname == "/index.html"){
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
    let isDark = localStorage.getItem("isDark")
    isDark = isDark == "true" ? "false" : "true"
    localStorage.setItem("isDark", isDark)

    loadThemeColor(isDark)
}

localStorage.getItem("isDark") == null ? localStorage.setItem("isDark", "false") : null

const html = document.querySelector('html')
const body = document.querySelector('body')
const darkMode = document.getElementById("darkMode")
const navbar = document.getElementById("navbar")
const bars = document.getElementById("bars")

window.location.pathname == "/index.html" ? document.addEventListener("scroll", changeActiveItem) : document.removeEventListener("scroll", changeActiveItem)
window.location.pathname == "/index.html" ? window.addEventListener("resize", changeWidth) : window.removeEventListener("resize", changeWidth)
bars != null ? bars.addEventListener("click", showMenu) : null

darkMode.addEventListener("click", changeColors)
loadThemeColor(localStorage.getItem("isDark"))
changeWidth()