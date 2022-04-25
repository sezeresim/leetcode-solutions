var maxSubArray = function (nums) {
  let sum = 0;
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
    if (sum < 0) {
      sum = 0;
      arr.push(nums[i]);
    } else {
      arr.push(sum);
    }
  }
  return Math.max(...arr);
};
