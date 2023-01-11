function enterValue(value) {
    let resultInput = document.getElementById("result");  // Value initially is 
    
    if(resultInput.value == "Error dividing with Zero!" || resultInput.value == "Error!") {
      clr();
    }
  
    if (resultInput.value == 0 && !isNaN(value)) {
      resultInput.value = "";
    }
    resultInput.value += value;
  
    if (!isNaN(resultInput.value)) {
      if(resultInput.value.length > 12) {
        resultInput.value = "Error!";
      }
    }
  }
  
  function clr() {
    let element = document.getElementById("result");
    element.style.fontSize = "medium";
    element.value = 0;
  }
  
  function evaluateResult() {
    let resultInput = document.getElementById("result");
    let checkDivision = checkZeroDivision(resultInput.value);
      if (checkDivision === true) {   // If check is true, it means we have zero division and no need to further do anything
      return; 
    }
    let total = eval(resultInput.value);
    resultInput.value = total;
  }
  
  function checkZeroDivision(expression) {  // 9/0 -> [9, 0]
    let expr = expression.split('/');       // [9, 0];
      if (expr[1] == 0) {
          let element = document.getElementById("result");
          element.style.fontSize = "x-small";
          element.value = "Error dividing with Zero!";
          
          return true;
      }
  
      return false;
  }