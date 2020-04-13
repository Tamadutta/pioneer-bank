
//loginbtn event handler ...
const loginbtn = document.getElementById("login");
loginbtn.addEventListener("click" , function (){
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const TransactionArea = document.getElementById("transaction-area");
    TransactionArea.style.display = "block";
})

//deposit button event handler ...
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click" , function (){
   const depositNumber = getInputNumber("depositAmount");

   if(depositNumber < 0){
       alert("you can't put negative value in deposit")
   }
   else{
    updateSpanText("currentDeposit" , depositNumber);
    updateSpanText("CurrentBalance" , depositNumber);
    document.getElementById("depositAmount").value = "" ;
   }

    
})

    
 //withdraw button event handler ...

 const withdrawBtn = document.getElementById("addWithdraw");
 withdrawBtn.addEventListener("click" , function(){
    const withdrawNum = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw" , withdrawNum );
    updateSpanText("CurrentBalance" , -1* withdrawNum);
    
    document.getElementById("withdrawAmount").value = "" ;
 }) 
    function getInputNumber(id){
        const Amount = document.getElementById(id).value;
        const amount = parseFloat(Amount);
        return amount;
    }
   

   function updateSpanText(id , depositNumber){
    const Current = document.getElementById(id).innerText;
    const CurrentNum = parseFloat(Current);
    const Total = depositNumber + CurrentNum ;
    document.getElementById(id).innerText = Total;

   }
   
   