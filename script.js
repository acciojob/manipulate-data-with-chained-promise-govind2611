//your JS code here. If required.
function manipulateData(arr) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(arr);
    }, 3000);
  })
  .then(arr => {
    const filteredArr = arr.filter(num => num % 2 === 0);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(filteredArr);
      }, 1000);
    });
  })
  .then(arr => {
    const mappedArr = arr.map(num => num * 2);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mappedArr);
      }, 2000);
    });
  })
}

manipulateData([1, 2, 3, 4])
  .then(resultArr => {
    document.getElementById("output").innerText = resultArr.join(", ");
  });
