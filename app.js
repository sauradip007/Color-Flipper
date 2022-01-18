const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let btn = document.getElementById("button");
let text = document.getElementById("text");
btn.addEventListener('click', function(){
    var randomNumber = Math.floor(Math.random() * 4);
    document.body.style.background = colors[randomNumber];
    text.innerHTML = colors[randomNumber];
    btn.style.background = colors[randomNumber];

})