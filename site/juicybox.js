// ---------------\\
//    Swiper
// ---------------//
var swiper = new Swiper(".swiper-container", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// ---------------\\
//    Packs active
// ---------------//
var addclass = "hightlight";
var $cols = $(".pack").click(function (e) {
  $cols.removeClass(addclass);
  $(this).addClass(addclass);
});
