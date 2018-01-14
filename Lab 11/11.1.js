var movePixels = 10; // number of pixels
var delayMs = 50; // number of miliseconds
var dogTimer = null;
var timeoutMs = 30000;


// Move the image on screen with 10px
function dogWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  // reset image position to start
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}

// Call dogWalk function every 50 ms
function startDogWalk() {
  document.getElementById("start-button").disabled = true;
  document.getElementById("stop-button").disabled = false;
  dogTimer = window.setInterval(dogWalk, delayMs);
  document.getElementById("info").innerHTML = movePixels * (1000 / delayMs);
}

var startButton = document.getElementById("start-button").addEventListener("click", startDogWalk);

function stopDogWalk() {
  document.getElementById("stop-button").disabled = true;
  document.getElementById("start-button").disabled = false;
  window.clearInterval(dogTimer);
}

var stopButton = document.getElementById("stop-button").addEventListener("click", stopDogWalk);

function fasterDogWalk() {
    movePixels += 2;
    document.getElementById("info").innerHTML = movePixels * (1000 / delayMs);
}

var fatserButton = document.getElementById("speed-button").addEventListener("click", fasterDogWalk);

var resetButton = document.createElement("button");
resetButton.innerHTML = "Reset";
document.getElementById("buttons").appendChild(resetButton);
resetButton.addEventListener("click", resetDogWalk);

function resetDogWalk() {
    movePixels = 10;
    dogTimer = window.setInterval(dogWalk, delayMs);
    document.getElementById("start-button").disabled = false;
    document.getElementById("info").innerHTML = movePixels * (1000 / delayMs);
}

document.getElementById("info").innerHTML = movePixels * (1000 / delayMs);

window.setTimeout(function(){alert("Sesiune expirata"); },timeoutMs);
