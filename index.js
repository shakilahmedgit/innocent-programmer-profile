// menu bars js codes 
let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    header.classList.remove('active');
}


// custom cursor
const cursor1 = document.querySelector('.cursor-1');
const cursor2 = document.querySelector('.cursor-2');
const current = document.querySelector('.cursor-1 .current');


// onouse move 
window.onmousemove = (e) => {
  cursor1.style.top = e.pageY + 'px';
  cursor1.style.left = e.pageX + 'px';
  cursor2.style.top = e.pageY + 'px';
  cursor2.style.left = e.pageX + 'px';
};

document.querySelectorAll('a').forEach(links => {

  links.onmouseenter = () => {
    cursor1.classList.add('active');
    cursor2.classList.add('active');
    current.classList.add('active');
  };

  links.onmouseleave = () => {
    cursor1.classList.remove('active');
    cursor2.classList.remove('active');
    current.classList.remove('active');
  };

});

// scroll top icon

$(window).on('scroll load', function(){

    if($(window).scrollTop() > 0 ) {
        $('.top').show();
    }else {
        $('.top').hide();
    }

});

// smooth a scroll animation 

$('a[href="#"]').on('click', function (e) {

    e.preventDefault();

    $('html, body').animate({
        
        scrollTop: $($(this).attr(href)).offset().top,

    },

    500,
    'linear'
    
    );

});