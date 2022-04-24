function show()
   {
       var name= document.getElementById("per").value;
       var amount1=document.getElementById("principal").value;
       var rate_of_i=0.0665;
      //   document.getElementById("demo").innerHTML=amount1;
var amount=parseInt(amount1)
       var time1=document.getElementById("time").value;
var time_mon=parseInt(time1)

       const interest = (amount * (rate_of_i * 0.01)) / time_mon;
       const total = ((amount / time_mon) + interest).toFixed(2);
       document.getElementById("dname").innerHTML="Name: "+name;
       document.getElementById("demo").innerHTML="Your EMI Amount is: "+total;

      
   }
