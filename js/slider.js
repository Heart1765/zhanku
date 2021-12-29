// 轮播图
var bo = document.querySelector(".bo")
var lun = document.querySelector(".lun")
var l = document.querySelector(".l")
var r = document.querySelector(".r")
var list = document.querySelectorAll(".lun ul li")
var i = 0
// 轮播函数
function lunbo(flag = false) {
    if (flag) {
        if (i == 0) {
            i = 6
        } else {
            i--;
        }
    } else {
        i++
        // 大于5就变下标0, 也就是新一轮
        if (i >= 7) {
            i = 0
        }
    }
    bo.style.marginLeft = -(i * 1380) + "px"
    for (let j = 0; j < 7; j++) {
        list[j].classList.remove("cho")
    }
    list[i].className = "cho"
}
// 定时器
var time = setInterval(lunbo, 5000);
// 移入  图片停止定时器
lun.onmouseover = function () {
    clearInterval(time)
    l.style.opacity = "1"
    r.style.opacity = "1"
}
// 移出  图片开始定时器
lun.onmouseout = function () {
    time = setInterval(lunbo, 5000);
    l.style.opacity = "0"
    r.style.opacity = "0"
}
// 点击左边，向左一张
l.onclick = function () {
    lunbo(true)
}
// 点击右边
r.onclick = function () {
    lunbo()
}
// 移到那个小圆点就显示哪张图
for (let k = 0; k < 7; k++) {
    list[k].onmouseover = function () {
        i = k - 1
        lunbo()
        clearInterval(time)
    }
}