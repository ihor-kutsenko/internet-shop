

function closeModal(evt) {
  if (evt.code === "Escape" || evt.target.classList.contains('js-close-modal')) {
    this.close();
  }
}




export { closeModal };