 var input="program";
  var middlelen;
  var arr1=[];
  var isbol=false;
   for(var i=0;i<input.length;i++){
     var out="";
	//leftside spacer
	 if(i<=0){
	 out+=input[i];
	 }else{
	   for(var k=0;k<i;k++){
	   out+="1";
	   }
	   out+=input[i];
	 }
	  //out+=input[i];
	  
	  //middle spacer
	  
	  if(i>0){
      middlelen=input.length-2*i-1;
   }else{
      middlelen=input.length-i-1;
   }
	  
	 
	 for(var j=1;j<middlelen;j++){
	 out+="1";
	 }
	 
	//rightside spacer
	 
	 if(input[i] != input[input.length-i-1]){
	 out+=input[input.length-i-1];
	 for(var x=0;x<i;x++){
	   out+="1";
	   }
	  
	 //console.log(out);
	 //break;
	 }else{
	 for(var y=0;y<i;y++){
	   out+="1";
	   }
	   arr1.push(out);
	  
	   break;
	  
       
	  
	 }
	  //console.log(out);
	  arr1.push(out);
	  
	 //console.log(input[input.length-i-1]);
	
   }
   console.log(arr1);
   
   for(var r=0;r<arr1.length;r++){
      console.log(arr1[r]);
   
   }
    for(var y=arr1.length-1; y>0; y--){
      console.log(arr1[y]);
  
   }
