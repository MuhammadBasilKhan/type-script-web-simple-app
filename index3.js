var numr1 = document.getElementById('num1');
var numr2 = document.getElementById('num2');
var button = document.getElementById('printbtn');
var ans = document.getElementById('printbtn');
var ans1 = document.getElementById('subtract');
var ans2 = document.getElementById('Multiplication');
var ans3 = document.getElementById('Division');
var answer = document.getElementById('demo');
function call() {
    var num1 = parseFloat(numr1.value);
    var num2 = parseFloat(numr2.value);
    var sum = num1 + num2;
    answer.textContent = sum.toString();
}
function call1() {
    var num1 = parseFloat(numr1.value);
    var num2 = parseFloat(numr2.value);
    var subtract = num1 - num2;
    answer.textContent = subtract.toString();
}
function call2() {
    var num1 = parseFloat(numr1.value);
    var num2 = parseFloat(numr2.value);
    var multiplication = num1 * num2;
    answer.textContent = multiplication.toString();
}
function call3() {
    var num1 = parseFloat(numr1.value);
    var num2 = parseFloat(numr2.value);
    var division = num1 / num2;
    answer.textContent = division.toString();
}
ans.addEventListener('click', call);
ans1.addEventListener('click', call1);
ans2.addEventListener('click', call2);
ans3.addEventListener('click', call3);
