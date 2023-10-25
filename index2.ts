const num=document.getElementById('num1') as HTMLInputElement
const numw=document.getElementById('num2') as HTMLInputElement
const but=document.getElementById('printbtn') as HTMLButtonElement
const out=document.getElementById('lms') as HTMLOutputElement
function deff():void{
    const value=parseFloat(num.value);
    const value2=parseFloat(numw.value);

    const sum=value+value2;
    parseFloat(out.value);
    out.textContent=sum.toString();


}
but.addEventListener('click',deff);
