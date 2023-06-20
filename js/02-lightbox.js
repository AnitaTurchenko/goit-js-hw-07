import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", imagesMarkup);

function createGallery (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" 
                href="${original}">
            <img class="gallery__image" 
                src="${preview}" 
                alt="${description}" />
        </a>
     </li>`
    })
    .join(" ")
};

const lightbox = new SimpleLightbox('.gallery a', {
     /* options */ 
     captionsData: "alt",
     captionDelay: 250,
    });
    