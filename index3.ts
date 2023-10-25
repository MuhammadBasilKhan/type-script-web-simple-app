const numr1=document.getElementById('num1') as HTMLInputElement
const numr2=document.getElementById('num2') as HTMLInputElement
const button=document.getElementById('printbtn') as HTMLButtonElement
const ans=document.getElementById('printbtn') as HTMLButtonElement
const ans1=document.getElementById('subtract') as HTMLButtonElement
const ans2=document.getElementById('Multiplication') as HTMLButtonElement
const ans3=document.getElementById('Division') as HTMLButtonElement
const answer=document.getElementById('demo') as HTMLButtonElement
function call():void{
    const num1=parseFloat(numr1.value);
    const num2=parseFloat(numr2.value);
    const sum=num1+num2;
    answer.textContent=sum.toString();
}
function call1():void{
    const num1=parseFloat(numr1.value);
    const num2=parseFloat(numr2.value);
    const subtract=num1-num2;
    answer.textContent=subtract.toString();

}
function call2():void{
    const num1=parseFloat(numr1.value);
    const num2=parseFloat(numr2.value);
    const multiplication=num1*num2;
    
    answer.textContent=multiplication.toString();

}
function call3():void{
    const num1=parseFloat(numr1.value);
    const num2=parseFloat(numr2.value);
    const division=num1/num2;
    answer.textContent=division.toString();

}
ans.addEventListener('click',call);
ans1.addEventListener('click',call1);
ans2.addEventListener('click',call2);
ans3.addEventListener('click',call3);