import imagesList from './gallery-items.js'

const listGalleryRef = document.querySelector('.js-gallery')
const lightboxRef = document.querySelector('.js-lightbox')
const closeBtnRef = document.querySelector('.lightbox__button')
const lightBoxImageRef = document.querySelector('img.lightbox__image');



const resultCreatImageElement = createImageElement(imagesList);

listGalleryRef.insertAdjacentHTML('beforeend', resultCreatImageElement)
listGalleryRef.addEventListener('click', onTargetImgClick)
closeBtnRef.addEventListener('click', onBtnClickClose)




// function createImageElement(item) {
//    return item.map(({preview,original}) => {
//         return `
//         <li class="gallery__item">
//         <a
//             class="gallery__link"
//             href="${original}">
//         <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//              alt="Tulips"
//          />
//         </a>
//         </li>
//         `
//     }).join('')
// }


function createImageElement(item) {
   return item.map(({preview,original,description}) => {
        return `
        <li class="gallery__item">
    
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
             alt="${description}"
         />
        </li>
        `
    }).join('')
}


function onTargetImgClick(e) {
    
  
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
 }





