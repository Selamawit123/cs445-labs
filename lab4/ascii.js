"use strict";
window.onload = function () {
  document.getElementById("start_button").onclick = fTimer;
  document.getElementById("stop_button").onclick = stopAnimation;
  document.getElementById("animation").onchange = animation;
  document.getElementById("fontsize").onchange = fontSize;
  document.getElementById("checkbox").onchange = turbo;
};

var animate = [];
var timer = null;
var i = 0;
var frame = null;
function animation() {
  document.getElementById("start_button").disabled = false;
  var animation = document.getElementById("animation").value;
  animate = ANIMATIONS[animation].split("=====\n");

  frame = ANIMATIONS[animation];

  document.getElementById("text-area").value = ANIMATIONS[animation];
}

function fTimer() {
  if (timer == null) {
    timer = setInterval(start, 250);
  }
}
function fontSize() {
  var text = document.getElementById("text-area");
  text.style.fontSize = document.getElementById("fontsize").value + "pt";
}
function startAnimation() {
  document.getElementById("text-area").value = animate[i];
  if (i < animate.length - 1) {
    i++;
  } else {
    i = 0;
  }
  document.getElementById("stop_button").disabled = false;
  document.getElementById("start_button").disabled = true;
  document.getElementById("animation").disabled = true;
  document.getElementById("checkbox").disabled = false;
}

function stopAnimation() {
  clearInterval(timer);
  document.getElementById("stop_button").disabled = true;
  document.getElementById("start_button").disabled = false;
  ocument.getElementById("animation").disabled = false;
  document.getElementById("text-area").value = frame;

  timer = null;

  i = 0;
}

function turbo() {
  let isTurbo = document.getElementById("checkbox").checked;
  clearInterval(timer);
  if (isTurbo) {
    timer = setInterval(start, 50);
  } else {
    timer = setInterval(start, 250);
  }
}
