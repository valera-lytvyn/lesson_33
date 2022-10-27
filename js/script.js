"use strict";
let clean = document.querySelector(".clean");
let clock = document.querySelector(".clock");
let list = document.querySelector(".itemsList");
let addForm = document.querySelector(".todoForm");
let items = JSON.parse(localStorage.getItem("list")) || [];

function showTime() {
  let date = new Date();
  let dateToday =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s;
  let dateTime = `${dateToday} ${time}`;
  document.getElementById("clock").textContent = dateTime;
  setTimeout(showTime, 1000);
}

showTime();

function createList(event) {
  event.preventDefault();
  let text = event.target.item.value;
  if (!text == "") {
    let item = {
      text,
      checked: false,
    };
    items.push(item);
    localStorage.setItem('list', JSON.stringify(items));
    showItems(items, list);
    this.reset(items);
  }
}

function showItems(notes, noteList) {
  noteList.innerHTML = notes
    .map((note, index) => {
      return `<li><label for='item${index}'><input type='checkbox'  id=item${index} data-index=
    '${index}' ${note.checked ? "checked" : ""}/>${
        note.text
      }</label> <span id=${index} class='trash'> </span> </li>
        `;
    })
    .join("");
   
}

function changeList(event) {
  if (!event.target.matches("input")) return;
  let string = event.target.dataset.index;
  items[string].checked = !items[string].checked;
  localStorage.setItem("list", JSON.stringify(items));
  showItems(items, list);
  changeString(event.target)
}

function changeString(element) {
 
  if (element.checked) {
    element.parentElement.style.cssText = `
    color: red;
    text-decoration: line-through;
    `;
    console.log(element.parentElement);
 
  }
}

list.addEventListener("click", function (event) {
  if (event.target.matches("span")) {
    items.splice(event.target.id, 1);
    localStorage.setItem("list", JSON.stringify(items));
    showItems(items, list);
  }
});

clean.addEventListener("click", function () {
   while (list.lastChild) {
    list.removeChild(list.lastChild);
  }
  localStorage.clear();
  location.reload() 
});

addForm.addEventListener("submit", createList);
list.addEventListener("click", changeList);
showItems(items, list);
