import imagesList from './gallery-items.js'

const listGallery = document.querySelector('.js-gallery')
const resultCreatImageElement = createImageElement(imagesList);


listGallery.insertAdjacentHTML('beforeend', resultCreatImageElement)
listGallery.addEventListener('click',onTargetImgClick)




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

    if (!IsImageElement) {
        return 
    }

  console.log(elementTarget.dataset.source)
}







