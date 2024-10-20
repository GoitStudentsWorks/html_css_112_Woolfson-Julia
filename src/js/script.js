(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
    }
})();
  
const menuToggle = document.querySelector('.header-btn-icon');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.querySelector('.close-btn-menu-modal');

// Открытие меню
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Закрытие меню
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});