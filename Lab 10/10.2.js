document.getElementById("square-input").addEventListener("click", getSquare);
document.getElementById("half-button").addEventListener("click", getHalf);
document.getElementById("percent-button").addEventListener("click", getPercent);
document.getElementById("area-button").addEventListener("keypress", getArea);

function getSquare() {
    var nr = document.getElementById("square-input").value;
    var square = nr * nr;
    document.getElementById("solution").innerHTML = 'Solution: ' + square;
}
function getHalf() {
    var nr = document.getElementById("half-input").value;
    var half = nr/2;
    document.getElementById("solution").innerHTML = 'Solution: ' + half;
}
function getPercent() {
    var pr = document.getElementById("percent1-input").value;
    var nr = document.getElementById("percent2-input").value;
    var percent = nr + nr*pr/100;
    document.getElementById("solution").innerHTML = 'Solution: ' + percent;
}
function getArea() {
    var radius = document.getElementById("area-input").value;
    var area = Math.PI * radius * radius;
    document.getElementById("solution").innerHTML = 'Solution: ' + area;
}
