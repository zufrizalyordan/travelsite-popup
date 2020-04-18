(function() {
  // Button Hotel Popup
  var btn = document.querySelector('.js-btn--popup-hotel');

  const toggleModal = function () {
    var modal = document.querySelector('.modal');
    modal.classList.toggle('show');
  }

  btn.addEventListener("click", toggleModal);
  // End Button Hotel Popup

  // Button Book Now
  // this button closes the window
  var bookNow = document.querySelector('.js-btn--book-now');

  bookNow.addEventListener("click", toggleModal);
  // End Button Hotel Popup

  // Accordion Hotel Policy
  const toggleAccordion = function () {
    var accordion = document.querySelector('.accordion__content');
    accordion.classList.toggle('show');

    var cd = document.querySelector('.accordion__tab .fa-chevron-down');
    var cdfu = document.querySelector('.accordion__tab .fa-chevron-up');

    if (cd) {
      cd.classList.remove("fa-chevron-down");
      cd.classList.add("fa-chevron-up");
    }

    if (cdfu) {
      cdfu.classList.add("fa-chevron-down");
      cdfu.classList.remove("fa-chevron-up");
    }
  }

  var accordionTab = document.querySelector('.js-accordion-tab');
  accordionTab.addEventListener("click", toggleAccordion);
  // End Accordion Hotel Policy
})();
