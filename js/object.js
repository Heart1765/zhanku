var obj = document.querySelector(".xiangqing .w1")

$(function () {
    $.ajax({
        url: "./shang.json",
        async: false,
        success: function (respones) {
            for (let i = 0; i < respones.com.length; i++) {
                var div = document.createElement("div")
                div.setAttribute("class", "tuijian")
                div.innerHTML =
                    `
                        <a href="">
                            <img src=`+ respones.com[i].img + ` alt="" class="tuijian_pic">
                        </a>
                        <a href="">
                            <h4 class="com_id" data-index=`+ respones.com[i].id + `>` + respones.com[i].title + `</h4>
                            <span>`+ respones.com[i].lititle + `</span>
                            <div class="comment">
                                <span>`+ respones.com[i].count1 + `</span>
                                <span>`+ respones.com[i].count2 + `</span>
                                <span>`+ respones.com[i].count3 + `</span>
                            </div>
                            <div class="photo">
                                <img src=`+ respones.com[i].photo + ` alt="">
                                <h4>`+ respones.com[i].name + `<span>` + respones.com[i].time + `</span></h4>
                            </div>
                        </a>
                    `
                obj.appendChild(div)
            }
            var com_id = document.querySelectorAll(".com_id")
            var tuijian_pic = document.querySelectorAll(".tuijian_pic")
            // console.log(com_id);
            for (let i = 0; i < com_id.length; i++) {
                tuijian_pic[i].onclick = function () {
                    window.open("./com.html?id=" + com_id[i].getAttribute("data-index"))
                }
                com_id[i].onclick = function () {
                    window.open("./com.html?id=" + com_id[i].getAttribute("data-index"))
                }
            }
        },
        error: function (reject) {
        }
    })
})

// for (let i = 0; i < com.length; i++) {
//     var div = document.createElement("div")
//     div.setAttribute("class", "tuijian")
//     div.innerHTML =
//         `
//             <a href="">
//                 <img src=${com[i].img} alt="" class="tuijian_pic">
//             </a>
//             <a href="">
//                 <h4>${com[i].title}</h4>
//                 <span>${com[i].lititle}</span>
//                 <div class="comment">
//                     <span>${com[i].count1}</span>
//                     <span>${com[i].count2}</span>
//                     <span>${com[i].count3}</span>
//                 </div>
//                 <div class="photo">
//                     <img src=${com[i].photo} alt="">
//                     <h4>${com[i].name}<span>${com[i].time}</span></h4>
//                 </div>
//             </a>
//         `
//     obj.appendChild(div)
// }

{/* <div class="tuijian">
    <a href="">
        <img src="./img/tang.jpg" alt="" class="tuijian_pic">
    </a>
    <a href="">
        <h4>可以吃的手办 | 翻糖人偶蛋糕《青...</h4>
        <span>手工艺-手办/模玩</span>
        <div class="comment">
            <span>1450</span>
            <span>6</span>
            <span>76</span>
        </div>
        <div class="photo">
            <img src="./img/tangwang.jpg" alt="">
            <h4>糖王周毅团队<span>1天前</span></h4>
        </div>
    </a>
</div> */}
// var com = [
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },
    //     {
    //         img: "./img/tang.jpg",
    //         title: "可以吃的手办 | 翻糖人偶蛋糕《青...",
    //         lititle: "手工艺-手办/模玩",
    //         count1: 1450,
    //         count2: 6,
    //         count3: 76,
    //         photo: "./img/tangwang.jpg",
    //         name: "糖王周毅团队",
    //         time: "1天前"
    //     },

    // ]