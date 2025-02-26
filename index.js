const range = document.getElementById("range");
const btn = document.getElementById("btn");
const genPass = document.getElementById('passGen')
const rangeVal = document.getElementById("rangeVal");
const upLet = document.getElementById('UpperCase')
const lowLet = document.getElementById('LowerCase')
const number = document.getElementById('Number')
const symbol = document.getElementById('Symbol')
const copyBtn = document.getElementById('copyBtn')

rangeVal.innerText= range.value;
range.addEventListener("input", (e)=>{
    console.log(e.target.value)
    rangeVal.innerText = e.target.value;
})

btn.addEventListener('click', ()=>{
    console.log("Button Clicked")
    let capitalLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let smallLetter = capitalLetter.toLowerCase();
    let numberstr = '0123456789'
    let symbolstr = '@#%&*(){}[]/'
    let finalString = "";

    if(upLet.checked){
        finalString += capitalLetter;
    }
    if(lowLet.checked){
        finalString += smallLetter;
    }
    if(number.checked){
        finalString += numberstr;
    }
    if(symbol.checked){
        finalString += symbolstr;
    }

    if(finalString == ''){
        alert("select atleast one box")
        
    }

    let newPass = '';
    for(let i = 0 ; i<range.value; i++){
        let randNum = Math.floor(Math.random()*finalString.length)
        newPass += finalString[randNum];
    }
    genPass.innerText = `${newPass}`
 
})

copyBtn.addEventListener('click',()=>{
    if(genPass.innerText == ''){
        alert("Nothing to Copy")
        return;
    }
    window.navigator.clipboard.writeText(genPass.innerText);
    alert("password copied")
})