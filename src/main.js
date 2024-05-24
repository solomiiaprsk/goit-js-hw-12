import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

import { imgTemplate } from "./js/render-functions";
import { getImages } from "./js/pixabay-api";


const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('#searchInput');
const searchBtn = document.querySelector('.searchBtn');
const galleryList = document.querySelector('ul.gallery');
const loaderEl = document.querySelector(".loader");
const loadMoreBtn = document.querySelector('.load-btn');

let queryTrimed;
let currentPage = 1;
let maxPage = 0;
const pageSize = 15;
let dataImages;

searchForm.addEventListener('submit', onFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMore);

async function onFormSubmit(event) {
  event.preventDefault();
  showLoader();
  galleryList.innerHTML = '';

  queryTrimed = searchInput.value.trim();
  if (queryTrimed === '') {
    hideLoader();
    return iziToast.warning({
      title: 'Caution',
      message: 'Searchfield empty. Please fill it out',
      position: 'topRight',
    });
  }
  currentPage = 1;

  try {
    dataImages = await getImages(queryTrimed, currentPage);
    maxPage = Math.ceil(dataImages.totalHits / pageSize);

    if (dataImages.hits.length === 0) {
      hideLoader();
        hideBtnLoad();
        searchInput.value = "";
        return iziToast.error({
            message:
                'There are no images matching your search query. Please try again!',
            position: 'topRight',
        });
    }

    imgTemplate(dataImages.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
  }
  checkBtnStatus();
  searchInput.value = '';
}

async function onLoadMore(event) {
  hideBtnLoad();
  showLoader();
  currentPage += 1;

  try {
    dataImages = await getImages(queryTrimed, currentPage);
    imgTemplate(dataImages.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  } finally {
    hideLoader();
    checkBtnStatus();
    scrollGallery();
  }
}

function showLoader() {
loaderEl.classList.add('is-open');
}
function hideLoader() {
  loaderEl.classList.remove('is-open');
}
function showBtnLoad() {
  loadMoreBtn.classList.add('is-open');
}
function hideBtnLoad() {
  loadMoreBtn.classList.remove('is-open');
}
function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideBtnLoad();
    return iziToast.info({
      title: 'Sorry',
      message: "You've reached the end of search results.",
      position: 'topRight',
    });
  } else {
    showBtnLoad();
  }
}

function scrollGallery() {
  const countCards = 2;
  const height =
    galleryList.firstElementChild.getBoundingClientRect().height * countCards;

  scrollBy({
    top: height,
    behavior: 'smooth',
  });
}


let mybutton = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0; 
}

scrollToTopBtn.addEventListener('click', topFunction)