// required: Modernizr // https://modernizr.com/download?prefixedcssvalue-setclasses
// Moderizr discussion: https://stackoverflow.com/questions/46309768/how-to-set-vendor-prefixed-css-values-not-property-names-client-side

/**
 * import this js file, create structure like this
 * put an id to carousel-slider__list
<div class="carousel-slider">
  <ul class="carousel-slider__list" id="carousel-slider__list_product-1">
    <li class="carousel-slider__list__item">
      <img
        src="images/products/1.jpg"
        alt="product-1"
        class="product-thumb"
      />
    </li>
    <li class="carousel-slider__list__item">
      <img
        src="images/products/1.jpg"
        alt="product-1"
        class="product-thumb"
      />
    </li>
  </ul>
</div>
 */

/**
 * add id to NEXT, PREV btns, example: the id = "prev-btn" + "___" id-of-carousel-slider__list
 * style for prev-btn and next-btn with class 'disabled': {pointer-events: none;}
<img id="prev-btn___carousel-slider__list_product-1"/>
<img id="next-btn___carousel-slider__list_product-1"/>
 */

const initCarouselSlider = () => {
  const lists = document.getElementsByClassName("carousel-slider__list");

  // validate
  if (!lists.length) return;

  for (let index = 0; index < lists.length; index++) {
    const element = lists[index];
    initCarouselSliderList(element);
  }
};

const initCarouselSliderList = (
  listEl = document.getElementById("list-Id")
) => {
  const width = Modernizr.prefixedCSSValue(
    "width",
    `${listEl.childElementCount * 100}%`
  );
  const opacity = Modernizr.prefixedCSSValue("opacity", 1);
  listEl.style.width = width;
  listEl.style.opacity = opacity;
  initNavigationListeners(listEl);
};

const initNavigationListeners = (
  listEl = document.getElementById("list-Id")
) => {
  /**
   * DECLARE AND VALIDATE
   */
  const childListCount = listEl.childElementCount;
  if (!childListCount) return;
  const listId = listEl.id;

  const prevNavigationId = "prev-btn___" + listEl.id;
  const nextNavigationId = "next-btn___" + listEl.id;
  const prevElement = document.getElementById(prevNavigationId);
  const nextElement = document.getElementById(nextNavigationId);
  // disable/enable prev-next
  const disablePrevNext = () => {
    // if true, add class disable to prev and next
    const currentPostitionOfShownSlide =
      currentPostitionOfShownSlideInAllSlides[listId] || 0;
    currentPostitionOfShownSlide === 0 && prevElement
      ? prevElement.classList.add("disabled")
      : prevElement.classList.remove("disabled");
    currentPostitionOfShownSlide === childListCount - 1
      ? nextElement.classList.add("disabled")
      : nextElement.classList.remove("disabled");
  };
  const getCurrentTranslateX = () => {
    const currentPostitionOfShownSlide =
      currentPostitionOfShownSlideInAllSlides[listId] || 0;
    return (-100 / childListCount) * currentPostitionOfShownSlide;
  };

  /**
   * MAIN THREAD
   */

  // add prev btn event listener
  if (prevElement) {
    // on did mount: add class disabled to prev
    if (!prevElement.classList.contains("disabled")) {
      prevElement.classList.add("disabled");
    }
    prevElement.addEventListener("click", (e) => {
      // return when disabled
      const classList = e?.target?.classList?.value || "";
      if (classList.includes("disabled")) return;

      const translateX = getCurrentTranslateX() + 100 / childListCount;
      listEl.style.transform = Modernizr.prefixedCSSValue(
        "transform",
        `translateX(${translateX}%)`
      );
      currentPostitionOfShownSlideInAllSlides[listId] =
        (currentPostitionOfShownSlideInAllSlides[listId] || 0) - 1;
      if (currentPostitionOfShownSlideInAllSlides[listId] < 0) {
        currentPostitionOfShownSlideInAllSlides[listId] = 0;
      }
      disablePrevNext();
    });
  }

  // add next btn event listener
  if (nextElement) {
    nextElement.addEventListener("click", (e) => {
      // return when disabled
      const classList = e?.target?.classList?.value || "";
      if (classList.includes("disabled")) return;

      const translateX = getCurrentTranslateX() - 100 / childListCount;
      listEl.style.transform = Modernizr.prefixedCSSValue(
        "transform",
        `translateX(${translateX}%)`
      );
      currentPostitionOfShownSlideInAllSlides[listId] =
        (currentPostitionOfShownSlideInAllSlides[listId] || 0) + 1;
      if (currentPostitionOfShownSlideInAllSlides[listId] > childListCount) {
        currentPostitionOfShownSlideInAllSlides[listId] = childListCount;
      }
      disablePrevNext();
    });
  }
};

const currentPostitionOfShownSlideInAllSlides = {
  "id-of-carousel-slider__list": 0, // equal 0%
};

initCarouselSlider();
