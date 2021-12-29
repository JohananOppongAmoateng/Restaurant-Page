export const content = document.getElementById("content")

export function menuLoad() {
const h1 = document.createElement("h1")
h1.textContent ="Special Menu"
content.appendChild(h1)
h1.className ="menu"
const array = ["Banku","Fufuo","Jollof","Tuo Zaafi"]
for (let index=0;index<array.length;index ++) {
    const div = document.createElement("div")
    content.appendChild(div)
    const img = document.createElement("img")
    img.src = `./dist/images/${array[index]}.png`

    const p = document.createElement("p")
    p.textContent = `${array[index]}, Price: $10`
    div.appendChild(p)
    
}
}