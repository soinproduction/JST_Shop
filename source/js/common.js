const itemDescr = [...document.querySelectorAll(".item-descr")];
const itemBox = document.querySelector(".item-box");
const newBody = document.querySelector(".item-box__coll");




const burgerBtn = document.querySelector(".mobile-burger");
const filterBtn = document.querySelector(".filter-row__btn");
const filterAside = document.querySelector(".filter-aside");
const closeAside = document.querySelector(".close-filter");

const cabinetBtn = document.querySelector(".cabinet-on");
const cabinetBox = document.querySelector(".cabinet-menu");
const backBtn = document.querySelector(".back-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-menu");
const sublistButton = document.querySelectorAll(".sublist-button");

const catalogListItems = document.querySelectorAll(".catalog-list--first > .catalog-list__item");

const firstSublist = mobileMenu.querySelectorAll('.first-sublist');

window.addEventListener('DOMContentLoaded', () => {
  const width = document.documentElement.clientWidth;
  if (width >= 576) {
    noveltyInit();
    findInit();
  }
  if (width <= 576) {
    itemDescr.forEach(function(item) {   // i - index
    newBody.insertAdjacentElement("afterbegin", item);
  });
  } else {
    itemDescr.forEach(function(item) {   // i - index
    itemBox.insertAdjacentElement("beforeend", item);
    });
  };

  if (width <= 576) {

    if (filterBtn) {
      filterBtn.onclick = function(e) {
        e.preventDefault();
        filterAside.classList.toggle('active'); // открытие меню
      };

      closeAside.onclick = function() {
        filterAside.classList.remove('active');
      };
    };



    burgerBtn.onclick = function() {
      mobileMenu.classList.toggle('active'); // открытие меню
    };




    closeBtn.onclick = function() {
      mobileMenu.classList.remove('active'); // закрытие меню
    };

    backBtn.onclick = function() {
      cabinetBox.classList.remove('active');
    }

    if ( document.URL.includes("cabinet.html") ) {
        cabinetBtn.onclick = function(e) {
        e.preventDefault();
      };

      burgerBtn.onclick = function() {
        mobileMenu.classList.toggle('active');
        cabinetBox.classList.add('active');
        backBtn.classList.add('active');
      };
    } else {
      cabinetBtn.onclick = function() {};
    };

    [...sublistButton].map((sublistBtn) => {
      sublistBtn.onclick = function(){
        this.nextElementSibling.classList.toggle('active'); // открытие первого уровня
        backBtn.classList.add('active');

        backBtn.onclick = function() {
          this.classList.remove('active');
          sublistBtn.nextElementSibling.classList.remove('active'); // закрытие первого уровня
        }
      }
    });

    [...catalogListItems].map((catalogListItem) => {
      catalogListItem.onclick = function(e){
        e.preventDefault();
        this.classList.add('active');
        backBtn.classList.add('active');
        const catalogSubListItems = catalogListItem.querySelectorAll(".catalog-list__item > .catalog-list--sublist");

        [...catalogSubListItems].map((catalogSubListItem) => catalogSubListItem.classList.add('active'));

        backBtn.onclick = function() {
        this.classList.remove('active');
        [...firstSublist].map((items) => items.classList.remove('active'));

        }
      }
    });



  };







  const catalogList = document.querySelector('.big-catalog-list');

  if (document.querySelector('.big-catalog-list')) {
    if (width <= 576) {
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
  if (width >= 576) {
    noveltyInit();
    findInit();
  }
  if (width <= 576) {
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
    if (width <= 576) {
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
      577: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // 992: {
      //   slidesPerView: 4,
      //   spaceBetween: 30,
      // },
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
    577: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      navigation:false,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20
    },
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
  mobileMenu.classList.remove('active');

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






