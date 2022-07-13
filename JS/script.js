"use strict";

let numOrStr = prompt('input number or string');

switch (numOrStr) {
case null: 
    alert("Вы отменили");
    break;
case " ":
    alert("пустая строка");
    break;
case NaN:
    alert("number is Ba_NaN");
    break;
default:
    alert("OK!");
}