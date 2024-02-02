const vibes = [
  "I are awesome",
  "I am strong and brave in any situation",
  "I am beautiful",
  "I love universe",
];

let randomVibes = () => vibes[Math.floor(Math.random() * vibes.length)];
document.querySelector(".vibes").append(randomVibes());
