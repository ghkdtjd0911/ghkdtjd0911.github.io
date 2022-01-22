const body = document.querySelector("body");

function RandomImg() {
  const imgNum = Math.floor(Math.random() * 3);
  document.body.style.backgroundImage = `url('images/${imgNum}.jpg')`;
}

RandomImg();
