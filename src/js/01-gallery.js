// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.innerHTML = galleryItems.reduce((html, { original, preview, description}) =>
    html + `<a class="gallery__item" href="${original}">
    <img class= "gallery__image"
    src="${preview}"
    alt="${description}"/>
    </a>`, '');


let imgBox = new SimpleLightbox(".gallery a", {captionDelay:250, captionsData: "alt" });
