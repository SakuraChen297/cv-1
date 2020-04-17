let html = document.querySelector("#html");
let style = document.querySelector("#style");

let words = `/* 哈啰，老费 郭宝 恺哥 我天
* 虽然是好久未见但甚是想念，无聊之时在下做了这个奇怪的网页给你们瞧着玩
* 整个活
* 下面画个太极阴阳图
*/

#div2{
    width:300px;
    height:300px;
}

/* 目前为止还什么都看不到吧~
* 表急，接下来就慢慢有了
**/

#div2{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
}

/* 阴阳相分
**/

#div2{
    background:linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}

/* 你中有我
* 我中有你
**/

#div2::before{
    width: 150px;
    height: 150px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div2::after{
    width: 150px;
    height: 150px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}

/* 至此，阴阳形成
* 相生相灭
**/

/* 希望早点开学
* 一起去bar畅饮black label
**/
`;
let words2 = "";
let n = 0;

let print = () => {
  setTimeout(() => {
    if (words[n] === "\n") {
      words2 += "<br>";
    } else if (words[n] === " ") {
      words2 += "&nbsp";
    } else {
      words2 += words[n];
    }
    html.innerHTML = words2;
    style.innerHTML = words.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < words.length - 1) {
      n += 1;
      print();
    }
  }, 100);
};
print();
