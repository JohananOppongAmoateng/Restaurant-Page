export const content = document.getElementById("content")

export function homeLoad() {

   const welcome = document.createElement("div")
    welcome.innerText = ""
  
   welcome.className = "welcome"
   
   const h1 = document.createElement("h1")
   const p = document.createElement("p")
   const pOffer = document.createElement("p")
   content.appendChild(welcome)  
   welcome.appendChild(h1)
   welcome.appendChild(p)
   welcome.appendChild(pOffer)
                                 
   
   h1.textContent = "Welcome to Mama Joan's Kitchen"
   p.textContent = "Order your delicious and samptious meals from us and have a taste of the good life"
  
   pOffer.textContent = "5% of all orders this Christmas and New Year"
   
   const orderbtn  = document.createElement("button")
   orderbtn.textContent = "Order Now!" 


  const footer = document.createElement("footer")
  footer.innerHTML ="Copyright @2022 by Johanan Oppong Amoateng"
    content.appendChild(footer)

}



