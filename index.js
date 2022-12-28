// function palindrome(x) {
//     var digit, result = 0
//     if (x < 0 || x % 10 == 0 && x != 0) return false;
//     while (x > result) {
//         digit = x % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
//         result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
//         x = Math.floor(x / 10)  //  Remove right-most digit. Ex. 123 → 12.3 → 12
//         console.log(Math.floor(x / 10),"result")
//     }
//     console.log(x,"x")
//     console.log((Math.floor(result / 10)))
//     return (result === x || x == (Math.floor(result / 10)));
// }
// console.log(palindrome(121))



// // 121      212     444    787


// function romanToInt(s) {
//     const romanNumber = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
//     let sum = 0;
//     let arr = s.split('');
//     for (let i = 0; i < arr.length; i++) {
//         const currentElement = arr[i];
//         const nextElement = arr[i + 1];
//         if (romanNumber[currentElement] < romanNumber[nextElement]) {
//             sum += romanNumber[nextElement] - romanNumber[currentElement];
//             i++;
//         } else {
//             sum += romanNumber[currentElement]
//         }
//     }
//     return sum;
// };
// console.log(romanToInt("MCMXCIV"));
// console.log(romanToInt("MIV"));



// function name(nums) {
//     let newArray = [];
//     let previous = 0;
//     let sum=0
//     for (let i = 0; i < nums.length; i++) {
//         // sum += nums[i];
//         // nums[i] = sum;
//         previous+=nums[i];
//         newArray[i] = nums[i] + previous;
//         newArray[i] = previous;
//     }
//     return newArray;
// }
// console.log(name([1,2,3,4]))


