var num = document.getElementById('num1');
var numw = document.getElementById('num2');
var but = document.getElementById('printbtn');
var out = document.getElementById('lms');
function deff() {
    var value = parseFloat(num.value);
    var value2 = parseFloat(numw.value);
    var sum = value + value2;
    parseFloat(out.value);
    out.textContent = sum.toString();
}
but.addEventListener('click', deff);
