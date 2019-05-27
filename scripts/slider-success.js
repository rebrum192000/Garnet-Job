if (screen.width < 768) {
    /* Индекс слайда по умолчанию */
    var slideR = 1;
    showSlides3(slideR);

    // /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide3() {
        showSlides3(slideR += 1);
    }

     // Функция уменьшяет индекс на 1, показывает предыдущий слайд
    function minusSlide3() {
        showSlides3(slideR -= 1);  
    }

    /* Устанавливает текущий слайд */
    function currentSlide3(o) {
        showSlides3(slideR = o);
    }

    setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
            plusSlide3();
        },8000);

    /* Основная функция слайдера */
    function showSlides3(o) {
        var k;
        var slidesr = document.getElementsByClassName("page-main__success-people");
        var dotsr = document.getElementsByClassName("page-main__success-people-button3");
        if (o > slidesr.length) {
          slideR = 1
        }
        if (o < 1) {
            slideR = slidesr.length
        }
        for (k = 0; k < slidesr.length; k++) {
            slidesr[k].style.display = "none";
        }
        for (k = 0; k < dotsr.length; k++) {
            dotsr[k].className = dotsr[k].className.replace("active2", "");
        }
        slidesr[slideR - 1].style.display = "block";
        dotsr[slideR - 1].className += " active2";
    };
} else {

    /* Индекс слайда по умолчанию */
    var slideRi = 1;
    showSlides4(slideRi);

    // /* Функция увеличивает индекс на 1, показывает следующй слайд*/
    function plusSlide4() {
        showSlides4(slideRi += 1);
    }
     // Функция уменьшяет индекс на 1, показывает предыдущий слайд
    function minusSlide4() {
        showSlides4(slideRi -= 1);  
    }
    /* Устанавливает текущий слайд */
    function currentSlideDesk(z) {
        showSlides4(slideRi = z);
    }
    setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
            plusSlide4();
        },8000);
    /* Основная функция слайдера */
    function showSlides4(z) {
        var w;
        var slidesn = document.getElementsByClassName("page-main__success-pair");
        var dotsn = document.getElementsByClassName("page-main__success-people-button-desk");
        if (z > slidesn.length) {
          slideRi = 1
        }
        if (z < 1) {
            slideRi = slidesn.length
        }
        for (w = 0; w < slidesn.length; w++) {
            slidesn[w].style.display = "none";
        }
        for (w = 0; w < dotsn.length; w++) {
            dotsn[w].className = dotsn[w].className.replace("active2-desk", "");
        }
        slidesn[slideRi - 1].style.display = "flex";
        dotsn[slideRi - 1].className += " active2-desk";

    };
}