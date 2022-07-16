const GAME_TIME = 20000;
const TIME_CHANGE_POSITION = 3000;

// Create Circles
const boxGame = document.querySelector("#box__game");
boxGame.style.width = "95vw";
boxGame.style.height = "88vh";
boxGame.style.margin = "0 auto";
boxGame.style.backgroundColor = "black";
boxGame.style.color = "#fff";
for (let i = 1; i <= 20; i++) {
  boxGame.innerHTML += `<span class='box ${i}'>${i}<span>`;
}

const timer = document.querySelector("#timer");
let interval = null;

function startTimer() {
  let timeCount = 1;

  timer.innerHTML = `${timeCount} s`;

  interval = setInterval(() => {
    timer.innerHTML = `${++timeCount} s`;
  }, 1000);
}
function stopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
  }
}

// Set position for Circles
const listBox = document.querySelectorAll(".box");
let randomPos = setTimeout(changePos, 0);
function changePos() {
  listBox.forEach((ele) => {
    ele.style.top = `${getRandomInt(1, 70)}vh`;
    ele.style.left = `${getRandomInt(1, 70)}vw`;
  });
  randomPos = setTimeout(changePos, TIME_CHANGE_POSITION);
}

// Start to play
clearTimeout(randomPos);
const start = document.querySelector("#start");
start.addEventListener("click", () => {
  startTimer();

  randomPos = setTimeout(changePos, 0);
  setTimeout(() => {
    alert(`Your score:  ${diem}`);
    clearTimeout(randomPos);
    stopTimer();
  }, GAME_TIME);
  diem = 0;
  index = 1;
});

// End game and show score
const end = document.querySelector("#end");
end.addEventListener("click", () => {
  clearTimeout(randomPos);
  stopTimer();
  alert(`Your score: ${diem}`);
  diem = 0;
  index = 1;
});

// Check object clicked
const score = document.querySelector("#score");
let diem = 0;
let index = 1;
listBox.forEach((item) => {
  item.addEventListener("click", () => {
    if (index === parseInt(item.innerHTML)) {
      score.innerHTML = index;
      diem = index;
      index++;
      item.style.display = "none";
    }
  });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
