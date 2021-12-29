var list1 = document.querySelectorAll(".fix .w1 .list1 li")
for (let i = 0; i < list1.length; i++) {
    list1[i].onclick = function () {
        for (let j = 0; j < list1.length; j++) {
            list1[j].className = ""
        }
        list1[i].className = "cho"
        console.log(i);
    }
}
