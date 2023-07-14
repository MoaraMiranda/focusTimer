import Controls from "./controls.js";
import Timer from "./timer.js";

/***********************
 Variables
***********************/

const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
let timerTimeOut;
const minutesDisplay = document.querySelector(".minutes");
let minutes = Number(minutesDisplay.textContent);
const secondsDisplay = document.querySelector(".seconds");

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  resetControls: controls.reset,
});

/***********************
 Events
***********************/
buttonPlay.addEventListener("click", function () {
  controls.play()
  timer.countDown();
});

buttonPause.addEventListener("click", function () {
  controls.pause()
  clearTimeout(timer.timerTimeOut);
});

buttonStop.addEventListener("click", function () {
  controls.reset();
  timer.reset();
});

buttonSoundOn.addEventListener("click", function () {
  buttonSoundOn.classList.add("hide");
  buttonSoundOff.classList.remove("hide");
});

buttonSoundOff.addEventListener("click", function () {
  buttonSoundOn.classList.remove("hide");
  buttonSoundOff.classList.add("hide");
});

buttonSet.addEventListener("click", function () {
  let newMinutes = controls.getMinutes
  if (!newMinutes) {
    timer.reset()
    return
  }
  minutes = newMinutes
  timer.updateDisplay(minutes, 0)
});
