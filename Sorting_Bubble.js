//這樣做會超出陣列，導致做出不必要的比較
// function bubbleSort(arr){
//     for(let i = 0;i < arr.length;i++){
//         for(let j = 0;j < arr.length;j++){
//             console.log(arr,arr[j],arr[j+1]);
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            //在沒有swap的時候不再繼續進行遍歷，減少程式運行時間
            let noSwap = true;
            //swap
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
            //swap寫法二(ES6)
            // const swap = (arr,idx1,idx2) =>{
            //     [arr[inx1],arr[idx2]] = [arr[idx2],arr[idx1]];
            // }
            if (noSwap) break;
        }
    }
    return arr;
}

// const sortArray = bubbleSort([37, 45, 29, 8]);
const sortArray = bubbleSort([8, 1, 2, 3, 4, 5, 6, 7])
console.log('最終結果', sortArray)
