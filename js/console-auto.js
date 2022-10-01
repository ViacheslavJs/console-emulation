
"use strict"    			  
        		    
function calc () {

  let resultDisplayControl = document.getElementById('res-out');
  let duplicationOfOperands = document.getElementById('outParam1', 'outParam2');
  let dataType = document.getElementById('type');
  let methodOn = document.getElementById('footnote');
  
  let param1;
  let param2;
			
  let inputValue1 = document.getElementById('input-1').value;
  let symbolCheckResult = /^[0-9]/.test(inputValue1); 
  //console.log(symbolCheckResult);
  
  if ( symbolCheckResult == true ) {
    param1 = Number(inputValue1); 
    //console.log(param1, typeof param1);
  } else if ( symbolCheckResult == false ) { 
    param1 = NaN; 
    //console.log(param1, typeof param1);
  }
  
			
  //let inputValue1 = Number(document.getElementById('input-1').value); // to number
  //let inputValue1 = document.getElementById('input-1').value * 1; // to number
  
  let inputValue2 = document.getElementById('input-2').value;      
  let pointCheckResult = inputValue2.includes('.');
  //dataType.innerHTML = `${typeof inputValue2}`; // show type
  //console.log(typeof param2);
  //console.log(pointCheckResult);   
     
  if ( pointCheckResult == true ) { 
    param2 = parseInt(inputValue2); 
    duplicationOfOperands.innerHTML = `${param1} to the power of ${parseInt.name}(${inputValue2})`;
    methodOn.style.display = "inline-block";
    
    let checkingParamOnNan = isNaN(param2);
    
    if ( checkingParamOnNan == true ) {
      duplicationOfOperands.innerHTML = `${param1} to the power of ${param2}`;
      methodOn.style.display = "none";
    }
    
    //console.log(pointCheckResult);
    
  } else if ( pointCheckResult == false ) { 
    param2 = parseInt(inputValue2); // TODO - with incorrect input - in the output NaN  
    //param2 = Number(inputValue2); // TODO - with incorrect input - in the output 0     
    duplicationOfOperands.innerHTML = `${param1} to the power of ${param2}`;
    methodOn.style.display = "none";    
    //console.log(pointCheckResult);    
  }
  
  if ( param1 && param2 ) {       
    power(param1, param2);      
    resultDisplayControl.style.display = "inline-block";        				   
  }
  
  
  // TODO - withdraw the amount:
  let outputResult;
  let sum = param1 + param2;
  let sumOfParameters = document.getElementById('sum');
  let sumCheckOnNan = isNaN(sum);  
	 
    if ( param1 == 0 || param2 == 0 ) {
	   outputResult = sum; 
      sumOfParameters.innerHTML = `sum: ${outputResult}`; 
      resultDisplayControl.style.display =  "none";		    
    } else if ( sumCheckOnNan == true ) {
      outputResult = sum;
      resultDisplayControl.style.display =  "none";
      sumOfParameters.innerHTML = `sum: ${outputResult}`;
    } else {
      sumOfParameters.innerHTML = `sum: ${sum}`;
    }
  
  //console.log(sum); 
  

  let selectedElement = document.getElementsByTagName('input'); 

    for (let i = 0; i < selectedElement.length; i += 1) {
      selectedElement[i].addEventListener('input', function () {
      this.style.width = 0;
      this.style.width = this.scrollWidth + "px";
      });
    }  

  // https://ru.stackoverflow.com/questions/648942/html-css-js
  /*
  document.querySelector('input').addEventListener('input', function () {
  this.style.width = 0;
  this.style.width = this.scrollWidth + 'px';
  });
  */
  
  function power ( base, exp ) {
    let result = 1;
    for( let i = 0; i < exp; i += 1 )
      result *= base;         
    return resultDisplayControl.innerHTML = result;
  }
    		  				  	  
}


