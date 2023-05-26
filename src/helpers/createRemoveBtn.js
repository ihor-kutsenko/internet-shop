
function createRemoveBtn() {
  let btn = document.createElement('button');
  btn.classList.add('remove-btn');
  btn.textContent = 'Remove from Favorite';
  return btn;
}

export { createRemoveBtn };