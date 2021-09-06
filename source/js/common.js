const itemDescr = [...document.querySelectorAll(".item-descr")];
const itemBox = document.querySelector(".item-box");
const newBody = document.querySelector(".item-box__coll");

window.addEventListener('DOMContentLoaded', () => {
  const width = document.documentElement.clientWidth;
  if (width > 578) {
    noveltyInit();
    findInit();
  }
  if (width <= 767) {
    itemDescr.forEach(function(item) {   // i - index
    newBody.insertAdjacentElement("afterbegin", item);
  });
  } else {
    itemDescr.forEach(function(item) {   // i - index
    itemBox.insertAdjacentElement("beforeend", item);
    });
  };



  const catalogList = document.querySelector('.big-catalog-list');

  if (document.querySelector('.big-catalog-list')) {
    if (width <= 767) {
      const catalogButtons = catalogList.querySelectorAll('.catalog-nav__btn');
      const catalogNavList = catalogList.querySelectorAll('.catalog-list');

      [...catalogButtons].map((catalogButton) => catalogButton.classList.add('accordion'));
      [...catalogNavList].map((catalogNav) => catalogNav.classList.add('panel'));

        var acc = document.getElementsByClassName("accordion");
        var b;

        for (b = 0; b < acc.length; b++) {
          acc[b].addEventListener("click", function(e) {
            e.preventDefault();
            this.classList.toggle("active");
            var panel = this.closest('.catalog-nav__image').nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              panel.classList.remove('active');
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
              panel.classList.add('active');
            }
          });
        }


    } else {
      const catalogButtons = catalogList.querySelectorAll('.catalog-nav__btn');
      const catalogNavList = catalogList.querySelectorAll('.catalog-list');
      [...catalogButtons].map((catalogButton) => catalogButton.classList.remove('accordion'));
      [...catalogNavList].map((catalogNav) => catalogNav.classList.remove('panel'));
    }
  }





});

window.addEventListener('resize', () => {
  const width = document.documentElement.clientWidth;
  if (width > 578) {
    noveltyInit();
    findInit();
  }
  if (width <= 767) {
    itemDescr.forEach(function(item) {   // i - index
    newBody.insertAdjacentElement("afterbegin", item);
  });
  } else {
    itemDescr.forEach(function(item) {   // i - index
    itemBox.insertAdjacentElement("beforeend", item);
    });
  };
  const catalogList = document.querySelector('.big-catalog-list');

  if (document.querySelector('.big-catalog-list')) {
    if (width <= 767) {
      const catalogButtons = catalogList.querySelectorAll('.catalog-nav__btn');
      const catalogNavList = catalogList.querySelectorAll('.catalog-list');

      [...catalogButtons].map((catalogButton) => catalogButton.classList.add('accordion'));
      [...catalogNavList].map((catalogNav) => catalogNav.classList.add('panel'));

        var acc = document.getElementsByClassName("accordion");
        var b;

        for (b = 0; b < acc.length; b++) {
          acc[b].addEventListener("click", function(e) {
            e.preventDefault();
            this.classList.toggle("active");
            var panel = this.closest('.catalog-nav__image').nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
              panel.classList.remove('active');
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
              panel.classList.add('active');
            }
          });
        }


    } else {
      const catalogButtons = catalogList.querySelectorAll('.catalog-nav__btn');
      const catalogNavList = catalogList.querySelectorAll('.catalog-list');
      [...catalogButtons].map((catalogButton) => catalogButton.classList.remove('accordion'));
      [...catalogNavList].map((catalogNav) => catalogNav.classList.remove('panel'));
    }
  }

})




// document.addEventListener('resize', () => {
//   const width = window.innerWidth
//   if (width > 576) {
//     noveltyInit();
//     findInit();
//   }
// });

function noveltyInit() {
  let noveltySlider = new Swiper('.novelty-slider', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".novelty-dots",
      clickable: true,
    },

    navigation: {
      nextEl: ".novelty-next",
      prevEl: ".novelty-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1180: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    }

  });
};


function findInit() {
  let findSlider = new Swiper('.find-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".find-dots",
      clickable: true,
    },

    navigation: {
      nextEl: ".find-next",
      prevEl: ".find-prev",
    },

  });
};

let swiper = new Swiper(".mySwiperMini", {
  spaceBetween: 30,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});

let swiper2 = new Swiper(".mySwiperBig", {
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".mySwiperBig-dots",
    clickable: true,
  },
  thumbs: {
    swiper: swiper,
  },
});

let myTabsSlider = new Swiper('.myTabsSlider', {
  slidesPerView: 3,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  loop: false,
  navigation: {
    nextEl: ".myTabsSlider__next",
    prevEl: ".myTabsSlider__prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1.8,
      spaceBetween: 30,
    },
    // 768: {
    //   slidesPerView: 3,
    //   spaceBetween: 40,
    // },
    // 1180: {
    //   slidesPerView: 4,
    //   spaceBetween: 30,
    // },
  }

});









const select = document.querySelectorAll(".select");

// если массив не пустой, пробегаемся в цикле по каждой найденой сущности
if (select.length) {
  select.forEach((item) => {
    // достаем из текущей сущности .select__current
    const selectCurrent = item.querySelector(".select__current");

    item.addEventListener("click", (event) => {
      const el = event.target.dataset.choice;
      const text = event.target.innerText;

      // Проверяем является ли это choosen и не выбрано ли его значение уже
      if (el === "choosen" && selectCurrent.innerText !== text) {
        selectCurrent.innerText = text;
      }

      item.classList.toggle("is-active");
    });
  });
}

function cabinetTabs(evt, navName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(navName).style.display = "block";
  evt.currentTarget.className += " active";
}

// accordion
var acc = document.getElementsByClassName("accordion");
var b;

for (b = 0; b < acc.length; b++) {
  acc[b].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.classList.remove('active');
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add('active');
    }
  });
}






