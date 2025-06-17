function bookPage() {
    window.location.href = "book.html";
  }

  const images = [
    "BEFORE_TEMPLATE.png",
    "AFTER_TEMPLATE.png"
  ];

  let index = 0;
const imgElement = document.getElementById("beforeimage");

setInterval(() => {
  index = (index + 1) % images.length;
  imgElement.src = images[index];
}, 3000); // 3000ms = 3 seconds