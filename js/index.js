import imagesList from './gallery-items.js'

const listGalleryRef = document.querySelector('.js-gallery')
const lightboxRef = document.querySelector('.js-lightbox')
const closeBtnRef = document.querySelector('[data-action="close-lightbox"]');
const lightBoxImageRef = document.querySelector('img.lightbox__image');
const overlayRef = document.querySelector('.lightbox__overlay');


const resultCreatImageElement = createImageElement(imagesList);

listGalleryRef.insertAdjacentHTML('beforeend', resultCreatImageElement)
listGalleryRef.addEventListener('click', onTargetImgClick)
closeBtnRef.addEventListener('click', onBtnClickClose)



function createImageElement(gallery) {
   return gallery.map(({preview,original,description}) => {
        return `
        <li class="gallery__item">
        <a
            class="gallery__link"
            href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
             alt="${description}"
         />
        </a>
        </li>
        `
    }).join('')
}

function onTargetImgClick(e) {
    
    e.preventDefault();
    const elementTarget = e.target;
    const IsImageElement = elementTarget.classList.contains('gallery__image');
    const elementDataSource = elementTarget.dataset.source;
    const altValue = elementTarget.getAttribute('alt');
   
    if (!IsImageElement) {
        return
    }
  

    lightboxRef.classList.add('is-open');
    lightBoxImageRef.src =`${elementDataSource}`
    lightBoxImageRef.alt =`${altValue}`

}

function onBtnClickClose(e) {
    lightboxRef.classList.remove('is-open');
    lightBoxImageRef.src = '';
    lightBoxImageRef.alt = '';
 }


// function onModalClose() {
    

// }


