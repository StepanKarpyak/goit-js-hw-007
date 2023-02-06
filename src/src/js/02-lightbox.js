import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
// console.log(galleryItems);
const itemGalleryMarkup = galleryItems.map(item => {
    return `<a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
  </a>`
}).join('');

gallery.insertAdjacentHTML('beforeend', itemGalleryMarkup);

let galleryLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  // captionPosition: 'bottom',
 

});
