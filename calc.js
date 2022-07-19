let Operator="";

let valueOne = "";
let valueTwo = "";
let Result;

const equalBtn = document.querySelector('#equals');
const divBtn = document.querySelector('#divide');
const mltplyBtn = document.querySelector('#multiply');
const addBtn = document.querySelector('#add');
const sbtrctBtn = document.querySelector('#subtract');
const Disp = document.querySelector('.display');
const lastDisp = document.querySelector('.lastresult');
const decBtn = document.querySelector('#decimal');

let valueSwitch = false;
let resultSwitch = false;

let displayValue;

decBtn.addEventListener('click',addDecimal);

equalBtn.addEventListener('click',Calculate);

divBtn.addEventListener('click',setOperator);
mltplyBtn.addEventListener('click',setOperator);
addBtn.addEventListener('click',setOperator);
sbtrctBtn.addEventListener('click',setOperator);

function setOperator(e){
    
    let opr = e.target.id;
    resultSwitch = false;

    if(opr=="divide"){
        Operator="/";
    }

    else if(opr=="add"){
        Operator="+";
    }
    
    else if(opr=="subtract"){
        Operator="-";
    }
    
    else if(opr=="multiply"){
        Operator="*";
    }    

    else{

    }
    
    console.log(opr);
    console.log(Operator);
    
    last = Disp.textContent;
    lastDisp.textContent = last;
    Disp.textContent = "0";
    

    valueSwitch = true;

}

function Addition(a,b){
    return Number(a)+Number(b);
}

function Subtraction(a,b){
    return Number(a)-Number(b);
}

function Division(a,b){
    return a/b;

}

function Multiplication(a,b){
    return a*b;
}

function Calculate(){

    if(valueOne=="" || valueTwo=="" || Operator==""){

    }

    else if(Operator=="/" && valueTwo=="0"){
        Disp.textContent = "div/0 error"
    }

    else{

    
        if(Operator=="+"){
            Result = Addition(valueOne,valueTwo);
            Disp.textContent = Result;
        }

        else if(Operator=="-"){
            Result = Subtraction(valueOne,valueTwo);
            Disp.textContent = Result;
        }

        else if(Operator=="*"){
            Result = Multiplication(valueOne,valueTwo);
            Disp.textContent = Result;
        }
        
        else if(Operator=="/"){
            Result = Division(valueOne,valueTwo);
            Disp.textContent = Result;
        }
    }

    lastDisp.textContent = valueTwo;
    valueTwo = "";
    Operator = "";
    valueOne = Result;
    valueSwitch = true;
    resultSwitch = true;

}

for(i=0;i<10;i++){

    let btn = document.querySelector(`#num${i}`)
    btn.addEventListener('click',numberPress);

}


function addDecimal(){

    if(valueSwitch==false && resultSwitch==false){
        valueOne = valueOne + "."
        displayValue=valueOne;
    }

    else if(valueSwitch==true){
        valueTwo = valueTwo + "."
        displayValue=valueTwo;
    }
    
    console.log("decimal");
    Disp.textContent = displayValue;

}

function numberPress(e){

    let num = e.target.id;
    
    if(valueSwitch==false && resultSwitch==false){
        num = num.replace('num','');
        valueOne = valueOne + "" + num;
        displayValue=valueOne;
    }

    else if(valueSwitch==true){
        num = num.replace('num','');
        valueTwo = valueTwo + "" + num;
        displayValue=valueTwo;
    }

    Disp.textContent = displayValue;

}
