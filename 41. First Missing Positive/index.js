/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let obj = {};
  let maxNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maxNumber) {
      maxNumber = nums[i];
    }
    if (nums[i] > 0) {
      obj[nums[i]] = 1;
    }
  }

  let result = 1;
  for (let i = maxNumber; i > 0; i--) {
    if (result > i) {
      result == i;
    }
  }
  return result;
};

firstMissingPositive([7, 8, 9, 11, 12]);
