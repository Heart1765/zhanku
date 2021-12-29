// 固定fixed，直达顶部
var fix = document.querySelector('.fix')
var xq = document.querySelector(".xiangqing")
var tp = document.querySelector(".tp")
var listNum = document.querySelectorAll(".list-num ul li")
var fixTop = fix.offsetTop
console.log(fixTop);
window.onscroll = function () {
    //获取距离页面顶部的距离
    // console.log($("footer").offset().top);
    // console.log($(".tp").offset().top);
    // console.log($("footer").height());
    let toTop = document.documentElement.scrollTop || document.body.scrollTop;
    // console.log(toTop);
    // console.log(fix);
    //div距离顶部的距离
    // 如果滑动的距离大于首页推荐那块距离顶部的像素，就固定定位
    // var foot = $("footer").offset().top - $("footer").height();
    var foot = $("footer").offset().top;
    // console.log($(window).scrollTop() > foot);
    // console.log($(window).scrollTop());
    // console.log(foot);

    console.log();
    if (toTop >= fixTop) {
        fix.style.position = 'fixed';
        fix.style.top = "0"
        fix.style.zIndex = "1"
        xq.style.marginTop = 60 + "px"
    }
    if (toTop < fixTop) {
        fix.style.position = "relative"
        xq.style.marginTop = 0 + "px"
    }
    if ($(window).scrollTop() < 500) {
        console.log(1);
        tp.style.diplay = "none"
        tp.style.position = "absolute"

    }
    else if ($(window).scrollTop() >= 500 && $(window).scrollTop() < foot) {
        // if (foot < $(".tp").offset().top) {
        //     console.log(1);
        //     tp.style.top = "50%"
        // } else {
        tp.style.position = "fixed"
        tp.style.right = "30px"
        tp.style.top = "80%"
        // }
    } else if ($(window).scrollTop() > foot) {
        // console.log(1);
        tp.style.top = "50%"
    }
    // if (toTop > fixTop + 120) {
    //     if (toTop < 3650) {
    //         tp.style.display = "block"
    //         tp.style.position = "fixed"
    //         tp.style.bottom = "30px"
    //     } else {
    //         tp.style.bottom = "300px"
    //     }
    // }
    // if (toTop < fixTop + 120) {
    //     tp.style.display = "none"
    //     tp.style.position = "fixed"
    // }
}
$(".tp").click(function () {
    $("html,body").animate({ "scrollTop": 0 + "px" })
})
for (let i = 0; i < 11; i++) {
    listNum[i].onclick = function () {
        for (let j = 0; j < 11; j++) {
            listNum[j].classList = ""
        }
        listNum[i].classList.add("cho")
    }
}