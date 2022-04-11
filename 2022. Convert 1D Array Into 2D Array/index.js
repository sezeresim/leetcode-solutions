/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n > original.length || original.length > m * n) {
    return [];
  }

  let result = [];
  let i = 0;
  while (i < original.length) {
    result.push(original.slice(i, i + n));
    i += n;
  }
  return result;
};
