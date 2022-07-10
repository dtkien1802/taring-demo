export default function displayPrice(num) {
  if (num == 0) return "0,000";
  let temp = "";
  temp += num;
  let result = "";
  let count = 0;
  let stop = 0;
  if (num < 0) stop++;
  for (let i = temp.length - 1; i >= stop; i--) {
    if (count === 3) {
      result = "," + result;
      count = 0;
    }
    result = temp[i] + result;
    count++;
  }
  if (num < 0) result = "-" + result;
  return result;
}
