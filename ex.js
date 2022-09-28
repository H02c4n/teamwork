// class Animal {
//   static belly = [];
//   eat() {
//     Animal.belly.push("food");
//   }
// }
// let x = new Animal();
// x.eat();
// console.log(Animal.belly[0]);

// let y = 0;
// async function test() {
//   y += await 2;
//   console.log(x);
// }
// test();
// y += 1;
// console.log(y);

var v = 1;
var f1 = function () {
  console.log(v);
};
var f2 = function () {
  var v = 2;
  f1();
};
f2();
