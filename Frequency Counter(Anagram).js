// O(n^2)
// function validAnagram(str1,str2){
// const arr1=str1.split('');
// const arr2=str2.split('');
    
//   if(arr1.length !== arr2.length){
//     return false;
//   }
//   for(let i = 0;i < arr1.length;i++){
//     let correctIndex = arr2.indexOf(arr1[i])
//     if(correctIndex === -1){
//       return false;
//     }
//     arr2.splice(correctIndex,1);
//   }
//   return true;
// }

//O(n)
function validAnagram(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    const lookup = {}

    for(let i = 0; i < arr1.length; i++){
        let letter = arr1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for(let i = 0; i < arr2.length; i++){
        let letter = arr2[i];
        if(!lookup[letter]){
            return false;
        }else{
            lookup[letter] -= 1;
        }
    }
    return true;
}

console.log(validAnagram('qwerty','qewrty'))