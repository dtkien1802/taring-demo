export default function displayPrice(num) {
  let temp = "";
  temp += num;
  let result = "";
  let count = 0;
  for (let i = temp.length - 1; i >= 0; i--) {
    if (count === 3) {
      result = "," + result;
      count = 0;
    }
    result = temp[i] + result;
    count++;
  }
  return result;
}
