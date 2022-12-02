(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contacs-loc-open]'),
    closeModalBtn: document.querySelector('[data-modal-contacs-loc-close]'),
    modal: document.querySelector('[data-modal-contacs-loc]'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
  }
  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();
// franchis'
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-contacs-open]'),
    closeModalBtn: document.querySelector('[data-modal-contacs-close]'),
    modal: document.querySelector('[data-modal-contacs]'),
    body: document.querySelector('body'),
  };
  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
  function openModal() {
    refs.modal.classList.remove('is-hidden');
    refs.body.classList.add('no-scroll');
  }
  function closeModal() {
    refs.modal.classList.add('is-hidden');
    refs.body.classList.remove('no-scroll');
  }
})();