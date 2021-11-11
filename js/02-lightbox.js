import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery')

const imgEl = galleryItems.map(img => 
    `<a class="gallery__link" href="${img.original}">
        <img
            class="gallery__image"
            src="${img.preview}"
            alt="${img.description}"
        />
    </a>`)
    .join('');
galleryListEl.insertAdjacentHTML("afterbegin", imgEl);
let lightbox = new SimpleLightbox('.gallery a', {
    nav: true,
});

console.log(galleryItems);
