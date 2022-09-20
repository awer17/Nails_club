var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    slidesPerView: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    WatchOverflow: true,
    spaceBetween: 20,

  });

  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 13,
    pagination: {
        el: ".swiper-pagination",
          type: "progressbar",
      },
  });

