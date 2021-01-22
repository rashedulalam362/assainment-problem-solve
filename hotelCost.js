// function hotelCost (days){

//     if (days<=10){
//         hotelCost =days*100

//     }

//   else if(days>10 && 20){
//     hotelCost =days*80

//   }

//   else if (days>20){
//     hotelCost =days*50
//   }
//   return hotelCost
 

// }



// var result =hotelCost(10)


function brickCalculator(floor){

    if (floor<=10){
      
        return 15*1000
    }else if(floor<=20){
    
        return 12*1000
    }else if (floor<=30){
    
        return 10*1000
    }
      
    
    }
    
    var result=brickCalculator(35);
    
    console.log(result); 