const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);

const btnsActive = [...$$$(".product__menu--btn")];
btnsActive.forEach((btn) => {
  btn.addEventListener("click", function () {
    let current = $$(".actived");
    current.className = current.className.replace(" actived", "");
    this.className += " actived";
  });
});

function translateItem() {
  function openNavbar() {
    const overlay = $$(".overlay");

    const navMobiElement = $$(".header__logo--bar-nav");
    const btnToggleNavMobi = navMobiElement.classList.toggle("show");
    if (btnToggleNavMobi) {
      navMobiElement.classList.add("transform");
      overlay.classList.add("open");
    } else {
      overlay.classList.remove("open");
      navMobiElement.classList.remove("transform");
    }
  }
  const btnNavMobiElement = [...$$$(".items-show")];
  btnNavMobiElement.forEach((element) => {
    element.addEventListener("click", () => {
      openNavbar();
    });
  });
}
translateItem();

const productContainerItems = [...$$$(".product__container--items")];

productContainerItems.forEach((item) => {
  item.setAttribute("tabindex", 0);
});

const links = $$$(".scroll_to");
links.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behaviour: "smooth", block: "end" });
  });
});

// window.onscroll = function () {
//   scrollFunction();
// };

// const headerContainer = $$(".header-main");
// const headerNav = $$(".header.grid.wide");

// function scrollFunction() {
//   if (document.documentElement.scrollTop > 700) {
//     headerContainer.style.position = "fixed";
//     headerContainer.style.zIndex = "999";
//     headerNav.style.height = "66px";
//   } else {
//     headerContainer.style.position = "absolute";
//     headerContainer.style.zIndex = "4";
//     headerNav.style.height = "100px";
//   }
// }
