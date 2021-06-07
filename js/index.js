import imagesList from './gallery-items.js'



const listGallery = document.querySelector('.js-gallery')




function createImageElement(item) {
   return item.map(({preview,original}) => {
        return `
        <li class="gallery__item">
        <a
            class="gallery__link"
            href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
             alt="Tulips"
         />
        </a>
        </li>
        `
    }).join('')
}


const resultCreatImageElement = createImageElement(imagesList);
listGallery.insertAdjacentHTML('beforeend', resultCreatImageElement)
