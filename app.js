let input = document.querySelector("#input");
let btn = document.querySelectorAll("button");
let string = "";
let arr = Array.from(btn);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === '=') {
            try {
                // Simple validation and evaluation
                string = evaluateExpression(string);
                input.value = string;
            } catch (error) {
                input.value = 'Error';
                string = "";
            }
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string || '0'; 
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

function evaluateExpression(expr) {
    if (/[^0-9+\-*/.%() ]/.test(expr)) {
        throw new Error('Invalid expression');
    }
    return Function('"use strict";return (' + expr + ')')(); 
