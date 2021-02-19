// Convert num into hours and miniutes

function timeConvert(num){
    var output;
 
     if(num < 60){
        output= `0:${num}`;
     } else{
         var divisible= parseInt(num/60);
         var remainder= num%60;
         output= `${divisible}:${remainder}`;
     }
 
     return output;
 }
 
 console.log(timeConvert(110))