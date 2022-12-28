function minimumSum(num) {
    const arr = num.toString().split('').sort();
    // return Number(arr[0] + arr[2]) + Number(arr[1] + arr[3]);
    return Number(arr[0] + arr[3]) + Number(arr[1] + arr[2]);
};

console.log(minimumSum(4905))
// 0459
// 04 59
// 05 49
// 09 45 
