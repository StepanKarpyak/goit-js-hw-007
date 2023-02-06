import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');


const itemGalleryMarkup = galleryItems.map(item => {
  
    return `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
      />
    </a>
  </div>`
}).join('');

gallery.insertAdjacentHTML('beforeend', itemGalleryMarkup);

let instance = basicLightbox;

const onPress = e => {
  if(e.key === 'Escape' && instance.visible()) {
    instance.close();
  }
};


const onClick = e => {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    instance = basicLightbox.create(`<img src="${e.target.dataset.source}">`)
    instance.show()
  }
}


gallery.addEventListener('click', onClick);
document.addEventListener('keydown', onPress);