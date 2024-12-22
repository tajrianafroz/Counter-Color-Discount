let Name = prompt("enter your username: (JS)");
let pass = prompt("Enter your password: (00000)");

if (Name === "JS") {
  if (pass === "00000") {
    alert("Welcome to our page. Please click on the pictures also.");
  } else {
    alert("Invalid password");
  }
} else {
  alert("Access Denied");
}

let img_1 = document.querySelector(".img_1");
let img_2 = document.querySelector(".img_2");
let img_3 = document.querySelector(".img_3");
let img_4 = document.querySelector(".img_4");
let img_5 = document.querySelector(".img_5");
let img_6 = document.querySelector(".img_6");
let main = document.querySelector(".main");

img_1.addEventListener("click", () => {
  main.src = "https://m.media-amazon.com/images/I/71a7M-Sd1XL._AC_SX466_.jpg";
});

img_2.addEventListener("click", () => {
  main.src = "https://m.media-amazon.com/images/I/71N7SXyFI+L._AC_SX466_.jpg";
});

img_3.addEventListener("click", () => {
  main.src = "https://m.media-amazon.com/images/I/71bKM2mP+KL._AC_SX466_.jpg";
});

img_4.addEventListener("click", () => {
  main.src = "https://m.media-amazon.com/images/I/81u6-TgKJaL._AC_SX466_.jpg";
});

img_5.addEventListener("click", () => {
  main.src = "https://m.media-amazon.com/images/I/81Gi0kTxQeL._AC_SX466_.jpg";
});

img_6.addEventListener("click", () => {
  main.src = "https://m.media-amazon.com/images/I/51TWzYVYhnL._AC_SX466_.jpg";
});

let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let input = document.querySelector(".input");

inc.addEventListener("click", () => {
  if (Number(input.value) + 1 < 7) {
    input.value = Number(input.value) + 1;
    dec.style.cursor = "pointer";
  } else {
    inc.style.cursor = "not-allowed";
  }
});

dec.addEventListener("click", () => {
  if (Number(input.value) > 1) {
    input.value = Number(input.value) - 1;
    inc.style.cursor = "pointer";
  } else {
    dec.style.cursor = "not-allowed";
  }
});

let pick = document.querySelector(".pick");
let bgClr = document.querySelector(".box");

pick.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  bgClr.style.background = `rgb(${red}, ${green}, ${blue})`;
});

let percentage = document.querySelector(".percentage");
let progress = document.querySelector(".progress");

progress.addEventListener("input", () => {
  let progressValue = Number(progress.value);
  percentage.innerHTML = progressValue;
});

let buy = document.querySelector(".buy");

buy.addEventListener("click", () => {
  alert("Go to main page!");
});
