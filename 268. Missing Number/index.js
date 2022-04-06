/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = 0;
  let missing = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  missing = (nums.length * (nums.length + 1)) / 2;
  return missing - sum;
};
