document.getElementById("nickname").innerHTML = "Monica";
document.getElementById("favorites").innerHTML = "procrastinating , food , reading";
document.getElementById("hometown").innerHTML = "Bucharest";

var items = document.getElementsByTagName("li");
for (i=0;i<items.length;i++) {
    items[i].classList.add('list-item');
}

var image = document.createElement("img");
image.setAttribute("src", "https://78.media.tumblr.com/523c0224dfa18f7ec6603ac13affbc16/tumblr_inline_otq41nwC6m1rtmmrs_540.png");
document.body.appendChild(image);
