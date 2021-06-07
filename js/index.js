import imagesList from './gallery-items.js'

const listGalleryRef = document.querySelector('.js-gallery')
const lightboxRef = document.querySelector('.lightbox')
const closeBtn = document.querySelector('.lightbox__button')
const lightBoxImage = document.querySelector('.lightbox__image');
// console.log(lightBoxImage.getAttribute('src'))

const resultCreatImageElement = createImageElement(imagesList);

listGalleryRef.insertAdjacentHTML('beforeend', resultCreatImageElement)
listGalleryRef.addEventListener('click', onTargetImgClick)
closeBtn.addEventListener('click',onBtnClickClose)


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
   return item.map(({preview,original}) => {
        return `
        <li class="gallery__item">
    
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
             alt="Tulips"
         />
        </li>
        `
    }).join('')
}




function onTargetImgClick(e) {
    const elementTarget = e.target;
    const IsImageElement = elementTarget.classList.contains('gallery__image');
    const elementDataSource = elementTarget.dataset.source;
    // const altValue = 


    if (!IsImageElement) {
        return 
    }

    lightboxRef.classList.add('is-open');
    lightBoxImage.src =`${elementDataSource}`
    lightBoxImage.alt =`${elementDataSource}`



//   console.log(elementTarget.dataset.source)
}

function onBtnClickClose(e) {
    lightboxRef.classList.remove('is-open');
}





