import { homeLoad }  from "./home.js"
import { menuLoad }  from "./menu.js"
import { contactLoad }  from "./contact.js"


const content = document.getElementById("content")    
const header = document.createElement("header")
const navBar = document.createElement("nav")
const logo = document.createElement("img")
logo.src = "./dist/images/logo.jpg"
content.appendChild(header)
header.appendChild(navBar)
navBar.appendChild(logo)
const home = document.createElement("a")
home.href ="#"
home.innerHTML = "Home"
home.className ="home"
navBar.appendChild(home)

const menu = document.createElement("a")
menu.href ="#"
menu.className ="menu"
menu.innerHTML = "Menu"
navBar.appendChild(menu)
menu.addEventListener("click",menuLoad)

const contact = document.createElement("a")
contact.href ="#"
contact.className ="contact"
navBar.appendChild(contact)
contact.innerHTML = "Contact"
contact.addEventListener("click",contactLoad)

home.addEventListener("click",homeLoad)



