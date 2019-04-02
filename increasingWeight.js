var arr=[10,36,54,89,12];
var obj={};

for(var i=0;i<arr.length;i++){

    var n= arr[i];

    if(n % Math.sqrt(n)== 0 && n % 6 == 0 && n%4 == 0 &&  n % 2 == 0){

       obj[n]= 12;

    }else if(n % Math.sqrt(n)==0 && n % 6 == 0 && n%4 == 0 ){
        obj[n]= 5+4;
    }else if(n % Math.sqrt(n)==0 && n % 2 == 0 ){
        obj[n]= 5+3;
    }else if( n % 6 == 0 && n%4 == 0 && n % 2 == 0){
        obj[n]= 4+3;
    }else if( n % 24 == 0){
        obj[n]= 4;
    }else if(n % 2 == 0){
        obj[n]= 3;
    }else if(n % Math.sqrt(n) == 0){
        obj[n]= 5;
    }else{
        obj[n]=0;
    }
}


var keysSorted = Object.keys(obj).sort(function(a,b){return obj[a]-obj[b]});
console.log(keysSorted);
