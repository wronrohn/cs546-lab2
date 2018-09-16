function checkIfArray(arr, variableName){
    if (arr == null || arr == undefined) {
        throw "Enter a value. Don't leave it empty";
    }
    if(!Array.isArray(arr)){
        throw `${variableName || "Provided Variable"} is not an array`;
    }
    if(arr.length == 0){
        throw  `Please fill some values in the array`
    }
    
    
}

function checkIfObject(obj, objName){
    if (obj == undefined) {
        throw `Please define ${objName || "an appropriate Variable"}`;
    }
    if(typeof obj != "object"){
        throw `${objName || "Provided Variable"} is not an Object`;
    }
    
}

function checkIfString(str, variableName){
    if(str == ""){
        throw "You gave an empty string. "
    }
    if (str == undefined) {
        throw `Please provide a ${variableName || "an appropriate Variable"}`;
    }
    if(typeof str != 'string'){
        throw `Provided Variable is not a string`;
    }
    
}

function deepEquality(obj1 , obj2){
    
checkIfObject(obj1, "Object 1");
checkIfObject(obj2, "Object 2");
let a = Object.getOwnPropertyNames(obj1);
let b = Object.getOwnPropertyNames(obj2);
    
if(a.length != b.length){
    return false;
}

for(let i=0; i < a.length; i++){
           let x = a[i];
           if(obj1[x] !== obj2[x]){
               return false;
           }
           
   }
   
return true;
  
}
 


function uniqueElements(arr){
    
    checkIfArray(arr, "The Variable provided")
    var a = new Set(arr);
    return a.size;
}

function countOfEachCharacterInString(str){
    
    checkIfString(str, "String")
    let charMap = {};     
    let x = str.split('');
    for(i = 0; i < x.length; i++){
        if(charMap[x[i]] >= 1){
            charMap[x[i]]++;
        }
        else{
            charMap[x[i]] = 1;
        }

        }
    flag = 1;
    return charMap;
        
    
}
module.exports= {deepEquality , uniqueElements, countOfEachCharacterInString};




