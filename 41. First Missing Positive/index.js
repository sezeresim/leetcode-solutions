/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let obj = {};
  let maxNumber = 0;
  let i = 0;
  while (i < nums.length) {
    let tmp = nums[i];
    if (tmp + 1 > maxNumber) {
      maxNumber = tmp + 1;
    }
    if (tmp > 0) {
      obj[tmp] = 1;
    }
    i++;
  }

  let j = 1;
  while (j <= maxNumber) {
    if (!obj[j]) {
      return j;
    }
    j++;
  }
  return 1;
};
