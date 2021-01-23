//https://github.com/rashedulalam362/assainment-problem-solve


function hotelCost (days){
var days;
    if (days<=10){
      hotelFare =days*100;
     
    }

    if (days<=20){
      var hotelFare =days*80;
       
      }

      if (days>20){
        hotelFare =days*50;
         
        }
  
 

  return hotelFare


 
}



var result=hotelCost(13)
console.log(result)

