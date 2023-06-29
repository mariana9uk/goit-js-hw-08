import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const markup = createMarkup(galleryItems);
const galleryElem = document.querySelector(".gallery");
 galleryElem.insertAdjacentHTML('beforeend', markup.join("")); 

function createMarkup(images) {return images.map(
    ({ preview, original, description }) => {
      return  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
})
};


galleryElem.style.listStyle ='none';
var lightbox = new SimpleLightbox ('.gallery a', {captionDelay: 250, captionData: 'alt'});
console.log(galleryItems);