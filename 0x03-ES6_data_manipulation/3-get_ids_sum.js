// The reduce method works with two functions called accumulator and current
// The accumulator adds upp all the specified valued
// The current value should be 0 by default
export default function getStudentIdsSum(arr) {
  return arr.reduce((acc, cur) => acc + cur.id, 0);
}
