function getNumbers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([1, 2, 3, 4]);
      }, 3000);
    });
  }

  // Chain the promise with filters out odd numbers and multiply even numbers by 2
  getNumbers()
    .then(numbers => numbers.filter(number => number % 2 === 0))
    .then(numbers => numbers.map(number => number * 2))
    .then(numbers => {
      // Print the array in the div with the id of "output" after 2 seconds
      setTimeout(() => {
        document.getElementById("output").textContent = numbers.join(", ");
      }, 2000);
    })
    .catch(error => console.log(error));