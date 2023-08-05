// function slow(x) {
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       // if there's such key in cache
//       return cache.get(x); // read the result from it
//     }

//     let result = func(x); // otherwise call func

//     cache.set(x, result); // and cache (remember) the result
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// console.log(slow(1)); // slow(1) is cached and the result returned
// console.log("Again: " + slow(1)); // slow(1) result returned from cache

// console.log(slow(2)); // slow(2) is cached and the result returned
// console.log("Again: " + slow(2)); // slow(2) result returned from

// function MyFun(sentence) {
//   return `${this.name} ${sentence}`;
// }

// let user = { name: "John", address: "Kabul" };
// let admin = { name: "Admin", address: "Mazar" };

// let faizi = MyFun.call(user);
// let ali = MyFun.call(admin);

// console.log(faizi, "is the user");
// console.log(ali, "is the Admin");

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     console.log("Called with " + x);
//     return x * this.someMethod(); // (*)
//   },
// };

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       console.log("it has x");
//       return cache.get(x);
//     }
//     let result = func.call(this, x); // "this" is passed correctly now
//     cache.set(x, result);
//     console.log("it dont have x");
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow); // now make it caching

// console.log(worker.slow(2)); // works
// console.log(worker.slow(2));

// let muzdor = {
//   sumMethod() {
//     return 1;
//   },
//   slow(num) {
//     console.log(`This is called with ${num}`);
//     return num * this.sumMethod();
//   },
// };

// function caching(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       console.log(`Cache has x in if`);
//     }
//     let result = func.call(this, x);
//     cache.set(x, result);
//     console.log(`cache has x in else`);
//     return result;
//   };
// }

// muzdor.slow = caching(muzdor.slow);

// console.log(muzdor.slow(5));
// console.log(muzdor.slow(5));
// console.log(muzdor.slow(5));
// console.log(muzdor.slow(5));
// console.log(muzdor.slow(6));
// console.log(muzdor.slow(7));
// console.log(muzdor.slow(8));
// console.log(muzdor.slow(9));
// console.log(muzdor.slow(10));
