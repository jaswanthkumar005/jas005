 
var arr=[10,36,54,89,12];
var obj={};
 var sortedArr=[];
for(var i=0;i<arr.length;i++){

    var n= arr[i];
	obj[n]=0;
	if(n % Math.sqrt(n) == 0){
        obj[n]+= 5;
    }
	if(n % 4 == 0 && n % 6 == 0 ){
        obj[n]+= 4;
    }
	if(n % 2 == 0){
        obj[n]+= 3;
    }
	
 
   
}


 objSort(obj);

 function objSort(obj){
 
 var min=0;
 var minObj=0;
  if(Object.keys(obj).length == undefined || Object.keys(obj).length == 0){

 return 0;
 }
 
 for(var x in obj){

    if(obj[x]>=min){
	   min=obj[x];
	   minObj=x;
	   
      
	}
 
 }
   
	 // console.log(x+"z");
	 // console.log(obj[min]);
	  //console.log(obj[minObj] );
	  delete obj[minObj];
	  sortedArr.unshift(parseInt(minObj));



 

  return objSort(obj);
  
 }
 
   console.log(sortedArr);
