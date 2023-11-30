
let converterform = document.getElementById('converterform');

let number = document.getElementsByClassName('number');

let radioinput = document.getElementsByClassName('radioinput');

let addition = document.getElementById('add');

let subtraction = document.getElementById('sub');

let modulo = document.getElementById('mod');

let division = document.getElementById('div');

let multiplication = document.getElementById('mul');

let submit = document.getElementById('submit');

let resultcontainer = document.querySelector('.resultcontainer');

let result = document.getElementById('result');

// let resultunit = document.getElementById('resultunit');

let reset = document.getElementById('reset');

let fullresult = document.querySelector('#fullresult');


//console.log(number);
//console.log(num1);
//console.log(num2);
// console.log(radioinput);
// console.log(submit);
// console.log(reset);
// console.log(resultcontainer);
// console.log(result);


// number.value = 20;

// number.addEventListener('change', numbercheck);

function inputcheck(){

          function inputcheck1() {

               number1 = Number(num1.value.trim());
               //console.log(temperature);

               console.log((num1.value).length);
               //console.log(temperature.length);

               if (isNaN(num1.value) || num1.value == "" || (number1).length == 0) {
                    alert("Invalid Input ❌ Please Try Again");
                    console.log("Invalid Input! Please enter an appropriate number");
                    converterform.reset();
               }

               else {

                    console.log("Input OK 👍");
                    console.log(num1.value);
                    console.log(number1);
               }
          }

          function inputcheck2() {

               number2 = Number(num2.value.trim());
               //console.log(temperature);

               console.log((num2.value).length);
               //console.log(temperature.length);

               if (isNaN(num2.value) || num2.value == "" || (number2).length == 0) {
                    alert("Invalid Input ❌ Please Try Again");
                    console.log("Invalid Input! Please enter an appropriate number");
                    converterform.reset();
               }

               else {

                    console.log("Input OK 👍");
                    console.log(num2.value);
                    console.log(number2);
               }
          }

          inputcheck1();
          inputcheck2();

     }


     // function unitcheck(){
     //      for (let rbtn of radioinput) {
     //           if(rbtn.checked == true){
     //                inputuint = rbtn.value; 
     //                console.log(inputuint);
     //           }
     //      }
     // }


     // function sameunits(){
     //      alert("Same Units Selected. Please select different units and try again");
     //      resetform();
     //      // tempresult = temperature;
     //      // convertedunit = inputuint;
     //      // tempresult = 0;
     // }


     function resetform(){

          converterform.reset();
          // tempresult = 0;
     }


     function resultprint(a, b, opr, res) {

          if(opr == "+"){
               opr = "+";
          }
          if(opr == "-"){
               opr = "-";
          }
          if(opr == "%"){
               opr = "%";
          }
          if(opr == "/"){
               opr = "/";
          }
          if(opr == "*"){
               opr = "*";
          }


          fullresult.style.opacity = 1;
          fullresult.value = `${a} ${opr} ${b}  =  ${res}`;

     }



submit.addEventListener('click', () => {

     let num1 = parseInt(document.getElementById('num1').value);

     let num2 = parseInt(document.getElementById('num2').value);

     inputcheck();

     // unitcheck();

     console.log('Convert Button Clicked');
     console.log(num1);
     console.log(num2);
     console.log(subtraction);


     if (addition.checked == true) 
     {
          add();
          resultprint(num1, num2, "+", tempresult);
     } 
     else if(subtraction.checked == true) 
     {
          sub();
          resultprint(num1, num2, "-", tempresult);
     }
     else if(modulo.checked == true) 
     {
          mod();
          resultprint(num1, num2, "%", tempresult);
     }
     else if(division.checked == true) 
     {
          div();
          resultprint(num1, num2, "/", tempresult);
     }
     else if(multiplication.checked == true) 
     {
          mul();
          resultprint(num1, num2, "*", tempresult);
     }
     else{
          alert("Please select an Operation");
          result.reset();
     }

     console.log(tempresult);


     result.value = tempresult;
     


     function add() {
     
          tempresult = num1 + num2;
     }

     function sub() {
     
          tempresult = num1 - num2;
     }

     function mul() {
     
          tempresult = num1 * num2;
     }

     function div() {
     
          tempresult = num1 / num2;
     }

     function mod() {
          tempresult = num1 % num2;
     }

})



reset.addEventListener('click', ()=>{

     // converterform.reset();
     // tempresult = 0;

     resetform();

})