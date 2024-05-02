const bookingImageList = document.querySelector(".booking__left-list");
const bookingImages = document.querySelectorAll(".booking__left-item");
const burgerBtn = document.querySelector(" .burger-btn");
const burgerMenu = document.querySelector(".nav");

bookingImageList.addEventListener("click", (e) => {
  const currentImage = e.target;

  bookingImages.forEach((el) => el.classList.remove("active"));
  currentImage.classList.add("active");
});

burgerBtn.addEventListener("click", () => {
  toggleBtnActive();
});

function toggleBtnActive() {
  burgerBtn.classList.contains("active")
    ? burgerBtn.classList.remove("active")
    : burgerBtn.classList.add("active");

  burgerMenu.classList.contains("active")
    ? burgerMenu.classList.remove("active")
    : burgerMenu.classList.add("active");
}
