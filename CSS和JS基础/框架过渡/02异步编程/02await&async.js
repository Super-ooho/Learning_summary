// async和await是ES8引入的新语法，用来简化Promise异步操作。在async/await出现之前，开发者只能通过链式.then()的方式处理Promise异步操作
// .then()链式调用的缺点：代码冗余、阅读性差、不易理解
// 使用async/await简化Promise异步操作的示例代码如下：

// 使用：在promise实例对象前面用await修饰，在使用awaitt的函数前面用async修饰
// 通过async/await直接获取调用结果，不需要.then()方法

// 注意事项：如果在function内部使用了await，则function必须被async修饰
// 在async方法中，第一个await之前的代码会同步执行（执行前面的代码之后就会跳出函数执行函数后面的同步的代码，然后执行异步的代码），await之后的代码会异步执行