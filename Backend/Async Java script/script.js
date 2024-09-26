
// console.log("hey");
// setTimeout(function () {
//   console.log("hey 2");
// }, 2000);
// setTimeout(function () {
//   console.log("hey 4");
// }, 2000);
// setTimeout(function () {
//   console.log("hey 3");
// }, 500);
// setTimeout(function () {
//   console.log("hey 5");
// }, 100);


//user will ask for number between 0-9 if the number is below 5 resolve and if not recjct

var ans = new Promise((res, rej) => {
  var n = Math.floor(Math.random() * 10);
  if (n < 5) {
    return res();

  }
  else {
    return rej();
  }

})

ans.then(function () {
  console.log("below")
})
  .catch(function () {
    console.log("above")
  })
console.log(ans)

