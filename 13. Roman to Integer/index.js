/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    const next = s[i + 1];
    console.log(next, map[next], map[current]);
    if (next && map[next] > map[current]) {
      result = result - map[current];
    } else {
      result = result + map[current];
    }
  }
  return result;
};
