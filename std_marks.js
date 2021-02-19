// Find the second lowest value of name. If there are more than one second lowest values, print names in alphabetical order. 

function stdGds(marks){
    var sortable= Object.keys(marks).sort(function(a,b){return marks[b]-marks[a]});
    var arr2=[];
    for(i=sortable.length-2;i>=0;i--){
     if(marks[sortable[sortable.length-2]]== marks[sortable[i]]){
         var arr3= arr2.push(sortable[i]);
     } else{
         continue;
     }
    }
    console.log(arr2.sort())
 }
 
 var marks= {
     "Jaya": 20,
     "Moha":10,
     "Rama": 20,
     "ABC": 20,
     "Harsh": 30
 }
 
 stdGds(marks)