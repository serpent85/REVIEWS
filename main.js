const REVIEWS = [
  {
    id: 1,
    job: "web developer",
    name: "susan Smite",
    img: "./img/image-jennie.jpg",
    text: "Lorem ipsum dolor sit, am634et consectetur adipisicing elit. Numquam natus ullam atque id provident adipisci eligendi at optio quis, ipsa exercitationem distinctio cumque voluptas tenetur omnis nemo officiis, dolorem porro.",
  },
  {
    id: 2,
    name: "sara jones",
    job: "UX designer",
    img: "./img/image-emily.jpg",
    text: "Lorem ipsum dolor sit, amet consectetcghtkhur adipisicing elit. Numquam natus ullam atque id provident adipisci eligendi at optio quis, ipsa exercitationem distinctio cumque voluptas tenetur omnis nemo officiis, dolorem porro",
  },
  {
    id: 3,
    name: "anna johnson",
    job: "web designer",
    img: "./img/image-thomas.jpg",
    text: "Lorem ipsum dolor sit, a",
  },
];
const img = document.querySelector(".image");
const author = document.getElementById("name");
const job = document.getElementById("job");
const text = document.getElementById("Description");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBTN = document.querySelector(".random-btn");
randomBTN.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * REVIEWS.length);
  showCase();
  console.log(currentItem);
});
let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showCase(currentItem);
});
function showCase(person) {
  // ma bekhater in REVIEWS ro ba current.. yeki mikonim chon
  const item = REVIEWS[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
}
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem >= REVIEWS.length) {
    currentItem = 0;
  }
  showCase(currentItem);
});
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem <= -1) {
    currentItem = 2;
  }
  showCase(currentItem);
});
