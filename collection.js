var productContainer = document.getElementById("products")
var search = document.getElementById ("search") 
var productist = productContainer.querySelectorAll("div") 


search.addEventListener("keyup",function(){
     var enteredValue = event.target.value.toUpperCase()

     for(count=0;count<productist.length;count=count+1)
     {
          var productname = productist[count].querySelector("p").textContent

          if(productname.toUpperCase().indexOf(enteredValue)<0)
          {
               productist[count].style.display="none"
          }

          else{
               productist[count].style.display="block"
          }
     }
})











