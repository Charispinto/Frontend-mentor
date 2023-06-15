document.addEventListener('DOMContentLoaded', ()=>{
    let totalpp = 0.00;
    let tipval = 0.00;

    const myBill = document.querySelector('#bill');
    const myPpl = document.querySelector('#ppl');
    const mySelTip = document.querySelectorAll('.tipsel');
    const myReset = document.querySelector('.reset');
    const myTip = document.querySelector('#pertip');
    const myTotal = document.querySelector('#pertotal');
    myReset.disabled=true;
    
    //calc tip
    function tipCalc(){
        console.log(mySelTip.value);

    }
    //calc bill
    function calc(){
        // ((parseInt(myBill.value)+(parseInt(tipval)*parseInt(myBill.value)))
        totalpp = ( (parseFloat(myBill.value)+ (tipval*myBill.value) )/myPpl.value).toFixed(2);
        console.log(totalpp);
        myTotal.innerHTML='$'+totalpp;
        myTip.innerHTML='$'+ (tipval*myBill.value/myPpl.value).toFixed(2);
        
    }
    
    function enable(){
        console.log("Called");
        if(myBill.value.length >0 && myPpl.value.length>0 && tipval >0){
            myReset.disabled=false
            calc();  
        }
        else{
            myReset.disabled=true;
        }
    }

    function reset(){
        myBill.value = null;
        myPpl.value = null;
        tipval = 0.00;
        myTotal.innerHTML = '$0.00';
        myTip.innerHTML = '$0.00';
        myReset.disabled=true;
        for (let i = 0; i < mySelTip.length; i++) {
            mySelTip[i].classList.remove("selected");
        }
    }
    myPpl.onkeyup = enable;
    myBill.onkeyup = enable;
    myReset.onclick = reset;

    mySelTip.forEach((btn)=>{
        btn.addEventListener("click",e=>{
            tipval=(e.target.value)
            console.log(`tipval=${tipval}`);
            console.log(tipval.type);

            // Remove "selected" class from all buttons
            for (let i = 0; i < mySelTip.length; i++) {
                mySelTip[i].classList.remove("selected");
            }
            
            // Add "selected" class to the clicked button
            btn.classList.add("selected");
            });
        btn.onclick = enable;
    })
    
    
    
})