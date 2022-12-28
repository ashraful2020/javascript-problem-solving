function modifyArray(nums) {
    for (let i = 0; i < nums.length; i++) {

        if (nums[i] % 2 == 0) {
            nums[i] = nums[i] * 2;

            console.log(nums[i], nums[i] * 2, "even")
        }
        else {
            nums[i] = nums[i] * 3
            console.log(nums[i], nums[i] * 3, "odd")
        }
    }
    return nums;
};
console.log(modifyArray([1, 2, 3, 4, 5]));
// 3 4 9 8 15
// 3 4 9 8 15