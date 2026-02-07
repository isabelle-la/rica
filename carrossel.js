document.addEventListener("DOMContentLoaded", () => {
    const slidesContainer = document.querySelector(".slides");
    const slides = document.querySelectorAll(".item-carrossel");
    const indicadores = document.querySelectorAll(".indicadores span");
    const btnPrev = document.querySelector(".seta-esquerda");
    const btnNext = document.querySelector(".seta-direita");

    let indexAtual = 0;

    function atualizarCarrossel() {
        slidesContainer.style.transform = `translateX(-${indexAtual * 100}%)`;

        indicadores.forEach(ind => ind.classList.remove("ativo"));
        indicadores[indexAtual].classList.add("ativo");
    }

    btnNext.addEventListener("click", () => {
        indexAtual = (indexAtual + 1) % slides.length;
        atualizarCarrossel();
    });

    btnPrev.addEventListener("click", () => {
        indexAtual = (indexAtual - 1 + slides.length) % slides.length;
        atualizarCarrossel();
    });

    indicadores.forEach((ind, index) => {
        ind.addEventListener("click", () => {
            indexAtual = index;
            atualizarCarrossel();
        });
    });

    atualizarCarrossel();
});
