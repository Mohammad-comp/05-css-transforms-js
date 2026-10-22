// Get the element where the answer will be displayed.
const answer = document.getElementById("answer");
// Array of possible answers for the Magic 8-Ball.
const answers = [
  "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no"
];

// Get the Magic 8-Ball element.
const magicBall = document.getElementById("magicBall");
let shakeTimer;

// Shake the ball before revealing a new answer.
magicBall.addEventListener("click", function() {
  answer.innerText = "";
  clearTimeout(shakeTimer);
  magicBall.classList.remove("shaking");
  magicBall.offsetWidth;
  magicBall.classList.add("shaking");

  shakeTimer = setTimeout(function() {
    answer.innerText = answers[Math.floor(Math.random() * answers.length)];
    magicBall.classList.remove("shaking");
  }, 800);
});
