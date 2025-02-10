(() => {
  const refs = {
    openModalBtn1: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn1: document.querySelector('[data-modal-close]'),
    modal1: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
  };

  refs.openModalBtn1.forEach(item =>
    item.addEventListener('click', toggleModal1)
  );

  refs.closeModalBtn1.addEventListener('click', toggleModal1);
  refs.backdrop.addEventListener('click', onBackdropClick);

  function toggleModal1() {
    refs.modal1.classList.toggle('is-hidden');
    document.body.classList.toggle('modal-open');
  }

  function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal1();
    }
  }

  if ('ontouchstart' in window) {
    refs.openModalBtn1.forEach(item =>
      item.addEventListener('touchstart', toggleModal1)
    );
  }
})();
