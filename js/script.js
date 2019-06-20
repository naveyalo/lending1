

$(document).ready(function () {

    $('.sliders').owlCarousel({
        loop:true,

        nav:true,
        dots: false,
        navText: [],
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            680:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });

    const iconSearch = document.querySelector('.icons__search');
    const body = document.querySelector('body');

    iconSearch.addEventListener('click', function (event) {
        event.stopPropagation();
        this.classList.add('icons__search--active');
    });

    body.addEventListener('click', function (event) {
        iconSearch.classList.remove('icons__search--active');
    });
});

