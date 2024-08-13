let button=document.querySelector("#but");
      button.addEventListener("click" ,async (evt)=>{
        evt.preventDefault();
        let amount=document.querySelector(".div input");
        amtVal=amount.value;
        console.log(amount.value);
        if(amount.value="" || amount.value<1)
        {
          amount="1";
          amount.value=1;
        }