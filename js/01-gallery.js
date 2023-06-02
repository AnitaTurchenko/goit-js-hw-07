import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imagesMarkup = createGallery(galleryItems);

galleryEl.insertAdjacentHTML("afterbegin", imagesMarkup);

function createGallery (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" 
        href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            target="_blank"
          />
        </a>
      </li>`
    })
    .join(" ")
};

function openBigImage(evt) {
    evt.preventDefault();
    if(!evt.target.classList.contains("gallery__image")) {
        return;
    }
        const source = evt.target.dataset.source;
        const instance = basicLightbox.create(`
    <img src="${source}">`);

    instance.show();

    window.addEventListener("keydown", closeModal);
    function closeModal(evt) {
        if (evt.code === "Escape") {
            instance.close();
        }
    };
};

    galleryEl.addEventListener("click", openBigImage);
