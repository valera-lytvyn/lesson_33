"use strict";

// let clean = document.querySelector(".todoClean");
// let todoBody = document.querySelector(".todoBody");
// let addItem = document.querySelector(".todoAdd");
// let todoForm = document.forms.todoForm;
// let todo = todoForm.todoText;
// let string = document.querySelector(".string");
// let trash;
// let li;
// let nameCounter = 0;
// let itemCounter = 0;
// let checkbox;
// let label;
// let roster = document.createElement("ul");
// todoBody.append(roster);

// window.setInterval(function () {
//   $('#clock').html(moment().format('ddd MM/DD/y H:mm:ss'))
// }, 1000);


//  addItem.addEventListener("click", createList);
// todo.addEventListener("keydown", function (event) {
//   if (event.key === "Enter") {
//     event.preventDefault();
//     createList(todo.value);
//   }
// });

// function createList(value) {
//   if (!value == "") {
//     console.log(value);
//     li = document.createElement("li");
//     roster.append(li);
//     string = document.createElement("div");
//     string.classList.add("string");
//     li.prepend(string);
//     checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.name = "note";
//     checkbox.id = "note" + nameCounter++;
//     checkbox.value = "note";
//     string.append(checkbox);
//     label = document.createElement("label");
//     checkbox.after(label);
//     console.log(value);
//     label.innerHTML = value;
//     trash = document.createElement("div");
//     trash.id = "trash" + itemCounter++;
//     let key = trash.id.slice(5);

//     label.after(trash);
//     trash.style.cssText = `
//     margin-right: 10px;
//     width: 22px;
//     height: 22px;
//     background: url(img/logo/trash.svg);
//        background-repeat: no-repeat;
//     background-size: cover;
//     `;
//     // createArray(key, value);
//     putToStorage(key, value);
//     checked();
//     removeItem();
//     // console.log(key, value);
//     todo.value = "";
//   }
// }


// function checked() {
//   checkbox.addEventListener("change", function (event) {
//     if (this.checked) {
//       changeString(this.id);
//     } else {
//       let clickedCheckbox = event.target;
//       clickedCheckbox.parentElement.style.color = "#000";
//       clickedCheckbox.parentElement.style.textDecoration = "none";
//       localStorage.removeItem(this.id);
//     }
//   });
// }
// function changeString(i
// ) {
//   console.log(item);
//     let element = document.getElementById(item);
//     console.log(element);
//     element.parentElement.style.color = "red";
//     element.parentElement.style.textDecoration = "line-through";
//     localStorage.setItem(element.id, element.value);
    
//   }

// function removeItem() {
//   trash.addEventListener("click", function (event) {
//     let clickedButton = event.target;
//     let idButton = event.target.id;
//     let removeKey = idButton.slice(5);
//     localStorage.removeItem(`note${removeKey}`);
//     localStorage.removeItem(removeKey);
//     clickedButton.parentElement.remove();

//   });
// }

// clean.addEventListener("click", function () {
//   while (roster.lastChild) {
//     roster.removeChild(roster.lastChild);
//   }
//   clearStorage();
// });

// function clearStorage() {
//   localStorage.clear();
// }


// function putToStorage(key, value) {

//     localStorage.setItem(key, value);
//     // localStorage.setItem("data", JSON.stringify(arr));
//     // localstorage.arr = JSON.stringify(arr);
// }

function autocompleteList() {
   for(var i=0, len=localStorage.length; i<len; i++) {
     var key = localStorage.key(i);
     var value = localStorage[key];
     console.log(key + " => " + value);
     createList(value)
 }
   // for (var i = 0; i < localStorage.length; i++) {
   //   const key = localStorage.key(i)
   //   console.log(localStorage.getItem(localStorage.key(i)));
   //    createList(localStorage.getItem(key));
   
   // }
 
 
   // console.log(JSON.parse(localStorage.arr));
     
 
   // if (localStorage.length !== 0) {
   //   let keys = Object.keys(localStorage);
   //   for(let key of keys) {
   //     if (localStorage.hasOwnProperty(key.includes("note"))) {
   //       changeString(key);
   //       console.log(key);
   //     } else {
   //       console.log(localStorage.getItem(key));
   //       createList(localStorage.getItem(key));
   //     }
   //   }
   // }
 }
 // autocompleteList();
 
 
 
 
 
 
 
 // for (let i = 0; i < localStorage.length; i++) {
 //   let x = localStorage.key(i);
 //   if (!x.includes("note")) {
 //     createList(localStorage.getItem(x));
 //     console.log(localStorage.getItem(x));
 //   } else {
     
 //     console.log(x);
 //     changeString(x);
 //   }
 // }