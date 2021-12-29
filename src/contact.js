export const content = document.getElementById("content")

export function contactLoad () {
    const h1 = document.createElement("h1")
    const div = document.createElement("div")
    h1.textContent = "Contact"
    div.appendChild(h1)
    content.appendChild(div)

    const p1 = document.createElement("p")
    div.appendChild(p1)
    p1.textContent = "Joan's Kitchen"
    const p2 = document.createElement("p")
    p2.textContent= "SSNIT office Adum"
    const p3 = document.createElement("p")
    p3.textContent= "Kumasi"

    const p4 = document.createElement("p")
    p4.textContent = "mamajoan@example.com"
    const p5 = document.createElement("p")
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(p4)
    div.appendChild(p5)

    p5.textContent ="+2335472343847"
  
  
}