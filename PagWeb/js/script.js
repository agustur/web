$(document).ready(function () {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("code-card");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    // Agregar eventos de clic a botones o cualquier otro elemento para avanzar diapositivas (personaliza según tus necesidades)
    $('.prev').click(function () {
        plusSlides(-1);
    });

    $('.next').click(function () {
        plusSlides(1);
    });

    // Agregar eventos de toque a las diapositivas (personaliza según tus necesidades)
    $('.code-card').on('click', function () {
        plusSlides(1); // Avanzar a la siguiente diapositiva cuando se toque una diapositiva
    });

});
