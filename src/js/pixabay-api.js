import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

export async function getImages(query, currentPage) {
    const url = 'https://pixabay.com/api/';
    const params = {
        key: '43849659-9c68b2f1fcc3f13b9ce5bf5a4',
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
        page: currentPage,
        per_page: 15,
    };
        const res = await axios.get(url, { params });
        return res.data;
    
};