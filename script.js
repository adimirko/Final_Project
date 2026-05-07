document.addEventListener("DOMContentLoaded", () => {
    // =========================
    // PORTFOLIO SLIDER
    // =========================
    const portfolioList = document.querySelector(".portfolio__list");
    const portfolioItems = document.querySelectorAll(".portfolio__item");
    const portfolioPrev = document.querySelector(".portfolio__arrow_prev");
    const portfolioNext = document.querySelector(".portfolio__arrow_next");
    const portfolioNumber = document.querySelector(".portfolio__pagination-number");

    let portfolioIndex = 0;

    function updatePortfolioSlider() {
        const itemWidth = portfolioItems[0].offsetWidth + 24; // gap
        portfolioList.style.transform = `translateX(-${portfolioIndex * itemWidth}px)`;

        // pagination (01/02)
        if (portfolioNumber) {
            portfolioNumber.textContent = `${String(portfolioIndex + 1).padStart(2, "0")}/${String(portfolioItems.length).padStart(2, "0")}`;
        }
    }

    if (portfolioNext && portfolioPrev) {
        portfolioNext.addEventListener("click", () => {
            if (portfolioIndex < portfolioItems.length - 1) {
                portfolioIndex++;
            } else {
                portfolioIndex = 0;
            }
            updatePortfolioSlider();
        });

        portfolioPrev.addEventListener("click", () => {
            if (portfolioIndex > 0) {
                portfolioIndex--;
            } else {
                portfolioIndex = portfolioItems.length - 1;
            }
            updatePortfolioSlider();
        });
    }

    updatePortfolioSlider();


    // =========================
    // PARTNERS SLIDER
    // =========================
    const partnersSlider = document.querySelector(".partners__slider");
    const partnersCard = document.querySelector(".partners-card");
    const partnersPrev = document.querySelector(".partners .portfolio__arrow_prev");
    const partnersNext = document.querySelector(".partners .portfolio__arrow_next");

    let partnersIndex = 0;

    // если потом добавишь несколько карточек — просто расширится
    const partnersItems = document.querySelectorAll(".partners-card");

    function updatePartnersSlider() {
        const width = partnersCard.offsetWidth;
        partnersCard.style.transform = `translateX(-${partnersIndex * width}px)`;
    }

    if (partnersNext && partnersPrev) {
        partnersNext.addEventListener("click", () => {
            if (partnersIndex < partnersItems.length - 1) {
                partnersIndex++;
            } else {
                partnersIndex = 0;
            }
            updatePartnersSlider();
        });

        partnersPrev.addEventListener("click", () => {
            if (partnersIndex > 0) {
                partnersIndex--;
            } else {
                partnersIndex = partnersItems.length - 1;
            }
            updatePartnersSlider();
        });
    }

    updatePartnersSlider();
});