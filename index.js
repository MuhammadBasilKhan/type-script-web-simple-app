var number1 = document.getElementById('num1');
var printButton = document.getElementById('printBtn');
var printvalue = document.getElementById('enterednumber');
function printEnteredValue() {
    var value = parseFloat(number1.value);
    printvalue.textContent = value.toString();
}
printButton.addEventListener('click', printEnteredValue);
