function rotateLeft(arr, n) {
  let k = arr.length;
  for (let i = 0; i < n%k; i++) {
    let rot = arr.shift();
    arr.push(rot);
  }
  return arr;
}