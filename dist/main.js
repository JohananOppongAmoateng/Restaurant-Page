/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad)
/* harmony export */ });
const content = document.getElementById("content")

function contactLoad () {
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

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "homeLoad": () => (/* binding */ homeLoad)
/* harmony export */ });
const content = document.getElementById("content")

function homeLoad() {

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





/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content),
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
const content = document.getElementById("content")

function menuLoad() {
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





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
menu.addEventListener("click",_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuLoad)

const contact = document.createElement("a")
contact.href ="#"
contact.className ="contact"
navBar.appendChild(contact)
contact.innerHTML = "Contact"
contact.addEventListener("click",_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactLoad)

home.addEventListener("click",_home_js__WEBPACK_IMPORTED_MODULE_0__.homeLoad)




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVCTzs7QUFFQTs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CTzs7QUFFQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixhQUFhOztBQUU1QztBQUNBLHVCQUF1QixhQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNuQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFDO0FBQ0E7QUFDTTs7O0FBRzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsOENBQVE7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsb0RBQVc7O0FBRTVDLDhCQUE4Qiw4Q0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdExvYWQgKCkge1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGgxLnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaDEpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXYpXG5cbiAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgZGl2LmFwcGVuZENoaWxkKHAxKVxuICAgIHAxLnRleHRDb250ZW50ID0gXCJKb2FuJ3MgS2l0Y2hlblwiXG4gICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHAyLnRleHRDb250ZW50PSBcIlNTTklUIG9mZmljZSBBZHVtXCJcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcDMudGV4dENvbnRlbnQ9IFwiS3VtYXNpXCJcblxuICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwNC50ZXh0Q29udGVudCA9IFwibWFtYWpvYW5AZXhhbXBsZS5jb21cIlxuICAgIGNvbnN0IHA1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBkaXYuYXBwZW5kQ2hpbGQocDIpXG4gICAgZGl2LmFwcGVuZENoaWxkKHAzKVxuICAgIGRpdi5hcHBlbmRDaGlsZChwNClcbiAgICBkaXYuYXBwZW5kQ2hpbGQocDUpXG5cbiAgICBwNS50ZXh0Q29udGVudCA9XCIrMjMzNTQ3MjM0Mzg0N1wiXG4gIFxuICBcbn0iLCJleHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuXG5leHBvcnQgZnVuY3Rpb24gaG9tZUxvYWQoKSB7XG5cbiAgIGNvbnN0IHdlbGNvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgd2VsY29tZS5pbm5lclRleHQgPSBcIlwiXG4gIFxuICAgd2VsY29tZS5jbGFzc05hbWUgPSBcIndlbGNvbWVcIlxuICAgXG4gICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICBjb25zdCBwT2ZmZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWxjb21lKSAgXG4gICB3ZWxjb21lLmFwcGVuZENoaWxkKGgxKVxuICAgd2VsY29tZS5hcHBlbmRDaGlsZChwKVxuICAgd2VsY29tZS5hcHBlbmRDaGlsZChwT2ZmZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgIFxuICAgaDEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gTWFtYSBKb2FuJ3MgS2l0Y2hlblwiXG4gICBwLnRleHRDb250ZW50ID0gXCJPcmRlciB5b3VyIGRlbGljaW91cyBhbmQgc2FtcHRpb3VzIG1lYWxzIGZyb20gdXMgYW5kIGhhdmUgYSB0YXN0ZSBvZiB0aGUgZ29vZCBsaWZlXCJcbiAgXG4gICBwT2ZmZXIudGV4dENvbnRlbnQgPSBcIjUlIG9mIGFsbCBvcmRlcnMgdGhpcyBDaHJpc3RtYXMgYW5kIE5ldyBZZWFyXCJcbiAgIFxuICAgY29uc3Qgb3JkZXJidG4gID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgb3JkZXJidG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vdyFcIiBcblxuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIilcbiAgZm9vdGVyLmlubmVySFRNTCA9XCJDb3B5cmlnaHQgQDIwMjIgYnkgSm9oYW5hbiBPcHBvbmcgQW1vYXRlbmdcIlxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKVxuXG59XG5cblxuXG4iLCJleHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuXG5leHBvcnQgZnVuY3Rpb24gbWVudUxvYWQoKSB7XG5jb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuaDEudGV4dENvbnRlbnQgPVwiU3BlY2lhbCBNZW51XCJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaDEpXG5oMS5jbGFzc05hbWUgPVwibWVudVwiXG5jb25zdCBhcnJheSA9IFtcIkJhbmt1XCIsXCJGdWZ1b1wiLFwiSm9sbG9mXCIsXCJUdW8gWmFhZmlcIl1cbmZvciAobGV0IGluZGV4PTA7aW5kZXg8YXJyYXkubGVuZ3RoO2luZGV4ICsrKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBpbWcuc3JjID0gYC4vZGlzdC9pbWFnZXMvJHthcnJheVtpbmRleF19LnBuZ2BcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHAudGV4dENvbnRlbnQgPSBgJHthcnJheVtpbmRleF19LCBQcmljZTogJDEwYFxuICAgIGRpdi5hcHBlbmRDaGlsZChwKVxuICAgIFxufVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgaG9tZUxvYWQgfSAgZnJvbSBcIi4vaG9tZS5qc1wiXG5pbXBvcnQgeyBtZW51TG9hZCB9ICBmcm9tIFwiLi9tZW51LmpzXCJcbmltcG9ydCB7IGNvbnRhY3RMb2FkIH0gIGZyb20gXCIuL2NvbnRhY3QuanNcIlxuXG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikgICAgXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxubG9nby5zcmMgPSBcIi4vZGlzdC9pbWFnZXMvbG9nby5qcGdcIlxuY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG5oZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKVxubmF2QmFyLmFwcGVuZENoaWxkKGxvZ28pXG5jb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbmhvbWUuaHJlZiA9XCIjXCJcbmhvbWUuaW5uZXJIVE1MID0gXCJIb21lXCJcbmhvbWUuY2xhc3NOYW1lID1cImhvbWVcIlxubmF2QmFyLmFwcGVuZENoaWxkKGhvbWUpXG5cbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxubWVudS5ocmVmID1cIiNcIlxubWVudS5jbGFzc05hbWUgPVwibWVudVwiXG5tZW51LmlubmVySFRNTCA9IFwiTWVudVwiXG5uYXZCYXIuYXBwZW5kQ2hpbGQobWVudSlcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsbWVudUxvYWQpXG5cbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuY29udGFjdC5ocmVmID1cIiNcIlxuY29udGFjdC5jbGFzc05hbWUgPVwiY29udGFjdFwiXG5uYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdClcbmNvbnRhY3QuaW5uZXJIVE1MID0gXCJDb250YWN0XCJcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsY29udGFjdExvYWQpXG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsaG9tZUxvYWQpXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=