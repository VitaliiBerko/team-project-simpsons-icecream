(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalMobBtn: document.querySelector('[data-modal-open-mob]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    mobileMenu: document.querySelector('.js-menu-container'),
    openMenuBtn: document.querySelector('.js-open-menu'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalMobBtn.addEventListener('click', toggleModalMob);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  function toggleModalMob() {
    refs.modal.classList.toggle('is-hidden');
    refs.mobileMenu.classList.toggle('is-open');
    refs.openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  }
})();