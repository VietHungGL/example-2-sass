const menuMobile = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".header-nav");
const btnBackToTop = document.querySelector(".btn-back-to-top");
const keyVisual = document.querySelector(".keyvisual");
const btnToDown = document.querySelector(".bnt-downd");
const head = document.querySelector(".header");
const ourWork = document.querySelector(".ourwork");    
    menuMobile.addEventListener("click", () => {
    menuMobile.classList.toggle("active");
    navMenu.classList.toggle("active");

})
    document.querySelectorAll(".nav-list").forEach(n => n.addEventListener("click", () => {
    menuMobile.classList.remove("active");
    navMenu.classList.remove("active");
}));
  document.onscroll = () => {
    if (window.scrollY > keyVisual.clientHeight) {
      head.classList.add("fixed");
      btnBackToTop.classList.add("active");
    } else {
      head.classList.remove("fixed");
      btnBackToTop.classList.remove("active");
    }
  };
  btnBackToTop.onclick = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  btnToDown.onclick = () => {
    window.scroll({
      top: ourWork.offsetTop,
      behavior: "smooth",
    });
  };
$('.people-slider-list').slick({
    infinite: true,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    arrows: true,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });

  $(".ourteam-image").slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 801,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });