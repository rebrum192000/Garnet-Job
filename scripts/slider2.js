/* Индекс слайда по умолчанию */
var slideI = 1;
showSlides2(slideI);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide2() {
    showSlides2(slideI += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide2() {
    showSlides2(slideI -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide2(m) {
    showSlides2(slideI = m);
}
setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
            plusSlide2();
        },8000);
/* Основная функция слайдера */
function showSlides2(m) {
    var j;
    var slidess = document.getElementsByClassName("page-main__why-slide2");
    var dotss = document.getElementsByClassName("page-main__why-button2");
    if (m > slidess.length) {
      slideI = 1
    }
    if (m < 1) {
        slideI = slidess.length
    }
    for (j = 0; j < slidess.length; j++) {
        slidess[j].style.display = "none";
    }
    for (j = 0; j < dotss.length; j++) {
        dotss[j].className = dotss[j].className.replace("active", "");
    }
    slidess[slideI - 1].style.display = "block";
    dotss[slideI - 1].className += " active";
}