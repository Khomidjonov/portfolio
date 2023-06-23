VANTA.NET({
  el: "#header",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  backgroundColor: 0x0,
  points: 9.00,
  maxDistance: 21.00,
  spacing: 16.00
})

let burgerMenu = document.querySelector(".burger__menu");
let navList = document.querySelector(".nav__list");
let headerCon = document.querySelector(".header__con");
let navLink = document.querySelectorAll(".nav__link")

burgerMenu.addEventListener("click", function () {
  headerCon.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  navList.classList.toggle("active");
})


for (let i = 0; i < navLink.length; i++) {
  const ele = navLink[i];
  ele.addEventListener("click", function () {
    navList.classList.toggle("active");
    headerCon.classList.toggle("active");
    burgerMenu.classList.toggle("active");
  })
}



// for (let i = 0; i < wokrItemContentLink.length; i++) {
//   const element = wokrItemContentLink[i];
//   element.addEventListener("click", function () {
//     popup.classList.toggle("active");
//   })

// }

// headerButton.addEventListener("click", function () {
//   popup.classList.toggle("active");
// })


// modalClose.addEventListener("click", function () {
//   popup.classList.toggle("active");
// })

var swiper2 = new Swiper(".mySwiper2", {
  grabCursor: true,
  effect: "creative",
  dots: true,
  autoplay: true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-120%", 0, -500],
    },
    next: {
      shadow: true,
      translate: ["120%", 0, -500],
    },
  },
});

let skill = document.querySelector(".skill");
let frontLineHtml = document.querySelector(".skill__item-line-html-frontline");
let frontLineCss = document.querySelector(".skill__item-line-css-frontline");
let frontLineJs = document.querySelector(".skill__item-line-js-frontline");

window.addEventListener("scroll", function scroll() {
  if (window.scrollY > skill.offsetTop - skill.clientHeight) {
    frontLineHtml.classList.add("active");
    frontLineCss.classList.add("active");
    frontLineJs.classList.add("active");
  }
})

let headerTitle = document.querySelector(".header__title");
let headerTitle1 = document.querySelector(".header__title1");

var typed2 = new Typed('#typed-text', {
  strings: ['3D визуализация', 'Графический дизайн', 'Брендинг',],
  typeSpeed: 30,
  backSpeed: 20,
  loop: true
});


// let portfolioPopup = document.querySelector(".portfolio__popup");
// let sliderPopup = document.querySelector(".slider-popup");
// let sliderPopup2 = document.querySelector(".slider-popup2");
// let sliderPopup3 = document.querySelector(".slider-popup3");
// let sliderPopup4 = document.querySelector(".slider-popup4");
// let sliderPopup5 = document.querySelector(".slider-popup5");
// let sliderPopup6 = document.querySelector(".slider-popup6");
// // let sliderPopup7 = document.querySelector(".slider-popup7"); Qoshiladi

// let sliderPopupContent = document.querySelector(".slider-popup-content");
// let sliderPopupContent2 = document.querySelector(".slider-popup-content2");
// let sliderPopupContent3 = document.querySelector(".slider-popup-content3");
// let sliderPopupContent4 = document.querySelector(".slider-popup-content4");
// let sliderPopupContent5 = document.querySelector(".slider-popup-content5");
// let sliderPopupContent6 = document.querySelector(".slider-popup-content6");
// // let sliderPopupContent7 = document.querySelector(".slider-popup-content7"); Qoshiladi
// let portfolioPopupClose = document.querySelectorAll(".portfolio__popup-close");

// sliderPopup.addEventListener("click", function () {
//   sliderPopupContent.classList.add("active");
// })

// for (let i = 0; i < portfolioPopupClose.length; i++) {
//   const element = portfolioPopupClose[i];
//   element.addEventListener("click", function () {
//     sliderPopupContent.classList.remove("active");
//   })
// }


// sliderPopup2.addEventListener("click", function () {
//   sliderPopupContent2.classList.add("active");
// })

// for (let i = 0; i < portfolioPopupClose.length; i++) {
//   const element = portfolioPopupClose[i];
//   element.addEventListener("click", function () {
//     sliderPopupContent2.classList.remove("active");
//   })
// }


// sliderPopup3.addEventListener("click", function () {
//   sliderPopupContent3.classList.add("active");
// })

// for (let i = 0; i < portfolioPopupClose.length; i++) {
//   const element = portfolioPopupClose[i];
//   element.addEventListener("click", function () {
//     sliderPopupContent3.classList.remove("active");
//   })
// }


// sliderPopup4.addEventListener("click", function () {
//   sliderPopupContent4.classList.add("active");
// })

// for (let i = 0; i < portfolioPopupClose.length; i++) {
//   const element = portfolioPopupClose[i];
//   element.addEventListener("click", function () {
//     sliderPopupContent4.classList.remove("active");
//   })
// }


// sliderPopup5.addEventListener("click", function () {
//   sliderPopupContent5.classList.add("active");
// })

// for (let i = 0; i < portfolioPopupClose.length; i++) {
//   const element = portfolioPopupClose[i];
//   element.addEventListener("click", function () {
//     sliderPopupContent5.classList.remove("active");
//   })
// }


// sliderPopup6.addEventListener("click", function () {
//   sliderPopupContent6.classList.add("active");
// })

// for (let i = 0; i < portfolioPopupClose.length; i++) {
//   const element = portfolioPopupClose[i];
//   element.addEventListener("click", function () {
//     sliderPopupContent6.classList.remove("active");
//   })
// }


// *******************  Qoshiladi **********************

// sliderPopup7.addEventListener("click", function () {
//   sliderPopupContent7.classList.add("active");
// })

// for (let i = 0; i < portfolioPopupClose.length; i++) {
//   const element = portfolioPopupClose[i];
//   element.addEventListener("click", function () {
//     sliderPopupContent7.classList.remove("active");
//   })
// }

// let modalClose = document.querySelector(".modal__close");
// let popup = document.querySelector(".popup");
// let modal = document.querySelector(".modal");
// let headerButton = document.querySelector(".header__button");
let workLink3d = document.querySelector(".work__link-3d");
let workLinkGraphics = document.querySelector(".work__link-graphics");
let workLinkBranding = document.querySelector(".work__link-branding");

let popup3d = document.querySelector(".popup__3d");
let graphics = document.querySelector(".graphics");
let branding = document.querySelector(".branding");
let body = document.querySelector("body");
let closePopup = document.querySelectorAll(".close__popup-3d");

// for (let i = 0; i < wokrItemContentLink.length; i++) {
//   const element = wokrItemContentLink[i];

// }

workLink3d.addEventListener("click", function () {
  popup3d.classList.toggle("active");
  body.classList.toggle("active");
})

for (let i = 0; i < closePopup.length; i++) {
  const element = closePopup[i];
  element.addEventListener("click", function () {
    popup3d.classList.remove("active")
    body.classList.remove("active")
  })
}
workLinkGraphics.addEventListener("click", function () {
  graphics.classList.toggle("active");
  body.classList.toggle("active");
})

for (let i = 0; i < closePopup.length; i++) {
  const element = closePopup[i];
  element.addEventListener("click", function () {
    graphics.classList.remove("active")
    body.classList.remove("active")
  })
}
workLinkBranding.addEventListener("click", function () {
  branding.classList.toggle("active");
  body.classList.toggle("active");
})

for (let i = 0; i < closePopup.length; i++) {
  const element = closePopup[i];
  element.addEventListener("click", function () {
    branding.classList.remove("active")
    body.classList.remove("active")
  })
}

