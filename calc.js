let Operator="";

let valueOne = "";
let valueTwo = "";
let Result;

const equalBtn = document.querySelector('.equalbutton');

let valueSwitch = false;

let displayValue;

equalBtn.addEventListener('click',Calculate)

function Addition(a,b){
    return a+b;
}

function Subtraction(a,b){
    return a-b;
}

function Division(a,b){
    return a/b;

}

function Multiplication(a,b){
    return a*b;
}

function Calculate(){
    if(valueOne=="" || valueTwo=="" || Operator==""){
    console.log("no value")
    }

    else{

    
        if(Operator=="+"){
            return Addition(valueOne,valueTwo);
        }

        else if(Operator=="-"){
            return Subtraction(valueOne,valueTwo);
        }

        else if(Operator=="*"){
            return Multiplication(valueOne,valueTwo);
        }

        else if(Operator=="/"){
            return Division(valueOne,valueTwo);
        }
    }

}

for(i=0;i<9;i++){

    let btn = document.querySelector(`#num${i}`)
    btn.addEventListener('click',numberPress);

}


function numberPress(e){

    let num = e.target.id;
    num = num.replace('num','');
    valueOne = valueOne + "" + num;
    
    if(valueSwitch==false){
        displayValue=valueOne;
    }

    let disp = document.querySelector('.display');
    disp.textContent = displayValue;

}
