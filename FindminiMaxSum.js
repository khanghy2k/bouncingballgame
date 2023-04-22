let arr = [7,69,2,221,8974]
function miniMaxSum(arr) {
    arr.sort((a,b)=>a-b);
    let minSum = 0;
    for (let i = 0; i < 4;i++){
        minSum += arr[i];
    }
    let maxSum = 0;
    for (let i = arr.length -1;i>=arr.length-4;i--){
        maxSum += arr[i];
    }
    console.log(minSum + " " + maxSum);
}