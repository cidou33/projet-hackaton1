// ------ Carousel ---------
const carouselScrollAreaJg = document.querySelector(".carouselScrollAreaJg");
const leftCarouselButtonJg = document.querySelector(".carouselButtonLeftJg");
const rightCarouselButtonJg = document.querySelector(".carouselButtonRightJg");
const carouselWrapperJg = document.querySelector(".carouselWrapperJg");

leftCarouselButtonJg.addEventListener("click", () => scrollCarousel("left"));
rightCarouselButtonJg.addEventListener("click", () => scrollCarousel("right"));

function scrollCarousel(direction) {
  if (direction === "left") {
    carouselScrollAreaJg.scrollLeft -= carouselScrollAreaJg.clientWidth;
  } else if (direction === "right") {
    carouselScrollAreaJg.scrollLeft += carouselScrollAreaJg.clientWidth;
  } else {
    console.error("Invalid direction");
  }
}

function handleKeyDown(e) {
  if (e.key === "ArrowLeft") {
    scrollCarousel("left");
  } else if (e.key === "ArrowRight") {
    scrollCarousel("right");
  }
}

carouselWrapperJg.addEventListener("keydown", handleKeyDown);
// ------ Fin Carousel -----------
