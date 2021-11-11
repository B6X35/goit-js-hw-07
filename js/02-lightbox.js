import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListEl = document.querySelector('.gallery')

const imgEl = galleryItems.map(img => 
    `<li>
        <a class="gallery__link" href="${img.original}">
            <img
                class="gallery__image"
                src="${img.preview}"
                alt="${img.description}"
            />
        </a>
    </li>`)
    .join('');
galleryListEl.insertAdjacentHTML("afterbegin", imgEl);
let lightbox = new SimpleLightbox('.gallery a[href*="jpg"]', {
    nav: true,
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});

console.log(galleryItems);
