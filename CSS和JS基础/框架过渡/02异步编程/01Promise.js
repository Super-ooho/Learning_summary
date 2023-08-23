// 回调地狱
// 代码耦合性太强，难以维护
// 大量冗余代码相互嵌套，代码可读性变差

// 为了解决回调地狱问题，ES6中新增Promise的概念
// 1.Promise是一个构造函数
// 可以通过创建Promise实例const p = new Promise()
const p = new Promise()
// new出来的实例对象，代表一个异步操作

// 2.Promise.prototype上包含一个.then方法
// 每一个实例对象都可以通过原型链的方式使用then()、catch()等方法

// 3..then()方法用来预先指定成功和失败的回调函数
p.then(res => {

}, err => {

})
// 成功的回调函数是必须要写的，失败的回调函数是可选的
// 如果上一个.then()方法中【返回了一个新的Promise实例对象】，则可以通过下一个.then()继续进行处理，通过.then()方法的链式调用，就解决了回调地狱的问题

// 通过.catch()捕获错误
// 在Promise的链式调用中如果发生了错误，可以使用Promise.prototype.catch方法进行捕获和处理
// 如果不希望前面的错误导致后续的.then无法正常执行，则可以将.catch的调用提前

// Promise.all()
// Promise.all()方法发起并行的Promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then操作（等待机制）
// // Promise.race()
// 只要任何一个异步操作完成，就会立即执行下一步的.then操作


