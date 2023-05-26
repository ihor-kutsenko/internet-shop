import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';
import { instruments } from './helpers/instruments';
import { createRemoveBtn } from './helpers/createRemoveBtn';
import './styles.css';

const list = document.querySelector(".js-list");
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list, true);

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
    const cardElement = evt.target.closest('.js-card');
    const removeBtn = createRemoveBtn();
    cardElement.querySelector('.js-btn-container').appendChild(removeBtn);
  } else if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    addToFavorite(product);
    const cardElement = evt.target.closest('.js-card');
    const removeBtn = createRemoveBtn();
    cardElement.querySelector('.js-btn-container').appendChild(removeBtn);
  } else if (evt.target.classList.contains('remove-btn')) {
    const product = findProduct(evt.target);
    removeFromFavorite(product);
    evt.target.parentNode.remove();
  }
}

function addToFavorite(product) {
  if (!isProductInFavorite(product)) {
    favorite.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favorite));
  }
}

function removeFromFavorite(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains('js-remove-favorite')) {
    const product = findProduct(evt.target);
    const index = favorite.findIndex(({ id }) => id === product.id);
    if (index !== -1) {
      favorite.splice(index, 1);
      localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favorite));
      createMarkup(favorite, list);
      location.reload(); // Оновлення сторінки
    }
  }
}

list.addEventListener('click', removeFromFavorite);


function isProductInFavorite(product) {
  return favorite.some(({ id }) => id === product.id);
}

function findProduct(elem) {
  const productId = Number(elem.closest('.js-card').dataset.id);
  return instruments.find(({ id }) => id === productId);
}
