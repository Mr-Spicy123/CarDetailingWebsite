function bookPage() {
    window.location.href = "book.html";
  }

  const beforeImages = [
    "BeforeOne.jpg",
    "BeforeTwo.jpg",
    "BeforeThree.jpg",
    "BeforeFour.jpg"
  ];

  const afterImages = [
    "AfterOne.jpg",
    "AfterTwo.jpg",
    "AfterThree.jpg",
    "AfterFour.jpg"
  ]

  let index = 0;
const beforeImgElement = document.getElementById("beforeimage");
const afterImgElement = document.getElementById("afterimage");

setInterval(() => {
  index = (index + 1) % beforeImages.length;
  beforeImgElement.src = beforeImages[index];
  afterImgElement.src = afterImages[index];
}, 5000); //ms