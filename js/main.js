document.getElementById("calculator").addEventListener("click",function(){
    const incomeFlied = income("income-input");
    const foodField = income("food");
    const rentField = income("rent");
    const clothField = income("cloth");

    const tottalExpenses = foodField + rentField + clothField;
    const blance = incomeFlied - tottalExpenses;
               

     setTexElement("ex-flied",tottalExpenses);
    const blances = setTexElement("ex-blance",blance);

});
     document.getElementById("save").addEventListener("click",function(){
          const incomeFlied = income("income-input");
          const saving = income("saving");
          const persenteg = saving * 0.01;
           
           const SavingAmount = parseInt(incomeFlied * persenteg) ;

          const sAmountstring = setTexElement("s-field", SavingAmount);
          const ras =  remain() - SavingAmount;
         
           
      
          setTexElement("rg-blance",ras)   
     });

 function income(elementId){
     const incomeFlied = document.getElementById(elementId);
     const incomeString = incomeFlied.value;
      const incomeAmount = parseInt(incomeString);
      return incomeAmount;
 }

  function setTexElement(id,value){
     const elements = document.getElementById(id);
           elements.innerText =  value;
          //  return parseFloat(value);
  }
    function remain(){
     const incomeFlied = income("income-input");
     const foodField = income("food");
     const rentField = income("rent");
     const clothField = income("cloth");
 
     const tottalExpenses = foodField + rentField + clothField;
     const blance = incomeFlied - tottalExpenses;
      return blance;
    }