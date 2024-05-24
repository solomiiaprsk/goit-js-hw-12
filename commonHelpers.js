import{S as T,a as q,i as m}from"./assets/vendor-c493984e.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const E=document.querySelector("ul.gallery");function g(n){const t=n.map(o=>`<li class="img-container">
  <a
    href=${o.largeImageURL}
    ><img
      src=${o.webformatURL}
      alt=${o.tags}
  /></a>
  <ul class="img-card">
    <li class="img-des">
      <p><b>Likes</b> ${o.likes}</p>
    </li>
    <li class="img-des">
      <p><b>Views</b> ${o.views}</p>
    </li>
    <li class="img-des">
      <p><b>Comments</b> ${o.comments}</p>
    </li>
    <li class="img-des">
      <p><b>Downloads</b> ${o.downloads}</p>
    </li>
  </ul>
</li>
`).join(" ");E.insertAdjacentHTML("beforeend",t),new T(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}async function y(n,t){const c="https://pixabay.com/api/",o={key:"43849659-9c68b2f1fcc3f13b9ce5bf5a4",q:n,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15};return(await q.get(c,{params:o})).data}const B=document.querySelector(".search-form"),d=document.querySelector("#searchInput");document.querySelector(".searchBtn");const b=document.querySelector("ul.gallery"),L=document.querySelector(".loader"),f=document.querySelector(".load-btn");let l,i=1,v=0;const P=15;let s;B.addEventListener("submit",$);f.addEventListener("click",I);async function $(n){if(n.preventDefault(),w(),b.innerHTML="",l=d.value.trim(),l==="")return a(),m.warning({title:"Caution",message:"Searchfield empty. Please fill it out",position:"topRight"});i=1;try{if(s=await y(l,i),v=Math.ceil(s.totalHits/P),s.hits.length===0)return a(),p(),d.value="",m.error({message:"There are no images matching your search query. Please try again!",position:"topRight"});g(s.hits)}catch(t){console.error("Error fetching images:",t)}finally{a()}S(),d.value=""}async function I(n){p(),w(),i+=1;try{s=await y(l,i),g(s.hits)}catch(t){console.error("Error fetching images:",t)}finally{a(),S(),C()}}function w(){L.classList.add("is-open")}function a(){L.classList.remove("is-open")}function x(){f.classList.add("is-open")}function p(){f.classList.remove("is-open")}function S(){if(i>=v)return p(),m.info({title:"Sorry",message:"You've reached the end of search results.",position:"topRight"});x()}function C(){const t=b.firstElementChild.getBoundingClientRect().height*2;scrollBy({top:t,behavior:"smooth"})}let h=document.getElementById("scrollToTopBtn");window.onscroll=function(){M()};function M(){document.body.scrollTop>20||document.documentElement.scrollTop>20?h.style.display="block":h.style.display="none"}function O(){document.documentElement.scrollTop=0}scrollToTopBtn.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
