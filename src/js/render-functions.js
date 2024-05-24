import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

export const galleryList = document.querySelector('ul.gallery');
export function imgTemplate(images) {
  const markUp = images
    .map(
      image => `<li class="img-container">
  <a
    href=${image.largeImageURL}
    ><img
      src=${image.webformatURL}
      alt=${image.tags}
  /></a>
  <ul class="img-card">
    <li class="img-des">
      <p><b>Likes</b> ${image.likes}</p>
    </li>
    <li class="img-des">
      <p><b>Views</b> ${image.views}</p>
    </li>
    <li class="img-des">
      <p><b>Comments</b> ${image.comments}</p>
    </li>
    <li class="img-des">
      <p><b>Downloads</b> ${image.downloads}</p>
    </li>
  </ul>
</li>
`
    )
    .join(' ');
    galleryList.insertAdjacentHTML("beforeend", markUp);
    const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
lightbox.refresh();
};