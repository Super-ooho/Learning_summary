// 原理就是通过定时器setInterval实现
let moveBlock = document.querySelector('.moveBlock')
// let button = document.querySelector('button')
function animate(obj, target, callback){
    // 先清除之前的定时器，只保留当前计时器
    clearInterval(obj.timer)
    obj.timer = setInterval(function(){
        if(obj.offsetLeft == target){
            clearInterval(obj.timer)
            // 回调函数写到移除定时器之后 
            if(callback){
                callback()
            }
        }
        // 缓慢停止动态步长
        let step = (target-obj.offsetLeft)/10
        step = step > 0 ?  Math.ceil(step) : Math.floor(step)
        obj.style.left = obj.offsetLeft + step + 'px'
    }, 10)
}
animate(moveBlock, 400 ,function(){})