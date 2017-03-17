var images = ["../img/showcase1.jpeg", "../img/showcase2.jpg", "./img/showcase3.JPG"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
  imageNumber += x;
  //If you reached end of array, start over!
  if (imageNumber > imageLength) {
      imageNumber = 0;
  }
  if (imageNumber < 0) {
      imageNumber = imageLength;
  }

  document.getElementById("showcase").css("background").url = images[imageNumber];

  return false;
}

function autoRun() {
  setInterval("changeImage(1)", 3000);
}
