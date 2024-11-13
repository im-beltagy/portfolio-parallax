const cardsWrapper = document.querySelector(".portfolio__cardsWrapper");
const cards = cardsWrapper.querySelectorAll(".portfolio__card");

window.addEventListener("scroll", () => {
  cards.forEach((card, index) => {
    const scroll = Math.max(card.offsetTop - index * card.clientHeight, 0);
    let percent = scroll / card.clientHeight / 2;
    if (percent > 1) percent = 1;

    const transformY = Math.max(-300, -500 * percent);
    const scale = Math.max(0.3, 1 - percent * 0.7);
    const rotate = Math.min(30, 30 * percent);
    const opacity = Math.max(0, 1 - percent);

    card.style.opacity = opacity;
    card.style.transform = `translateZ(40px) perspective(2000px) translateY(${transformY}px) scale(${scale}) rotateX(${rotate}deg)`;
  });
});
