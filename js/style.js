// let navbar=document.querySelector('.header .navbar')

// document.querySelector('#menu-btn').onclick=() =>{
//     navbar.classList.add('active');

// }


// document.querySelector('#close-navbar').onclick=() =>{
//     navbar.classList.remove('active');

// }


// var swiper = new Swiper(".home-slider", {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable:true,
//     },
//     loop:true,
//     grabCursor:true,
//   });






 window.addEventListener('scroll', () => {
      document.querySelector('nav').classList.toggle
      ('window-scroll', window.scrollY > 0)
  })

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        700:{
            slidesPerView:2
        }
    }
});
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 20,
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
    breakpoints: {
        1300:{
            slidesPerView:2
        }
    }
});


// var swiper = new Swiper(".mySwiper2", {
//   spaceBetween: 20,
//   slidesPerView: 1,
//   centeredSlides: false,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
  
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
  
// });



// media query


const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})



const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)