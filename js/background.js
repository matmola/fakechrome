const images = ["zelda1.jpg","zelda2.jpg","zelda3.jpg"];
const body = document.querySelector("body");
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;  //난수를 생성해 반올림 시켜서 image 어레이 속 사진 하나를 가져옴
document.body.appendChild(bgImage); //body에 html 추가