/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
  let arr = [];
  nums.forEach((el) => {
    arr.push(nums[el]);
  });
  return arr;
};
