import axios from 'axios'
import './App.css'
import PromotionsSlide from './Components/PromotionsSlide'
import Shops from './Components/Shops'
import TopNav from './Components/TopNav'
import { useEffect, useState } from 'react'

function App() {
  document.addEventListener("DOMContentLoaded", function() {
    let lazyImages = [].slice.call(document.querySelectorAll("img.lazyload"));
  
    if ("IntersectionObserver" in window) {
      let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            let lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove("lazyload");
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    } else {
      // Fallback สำหรับเบราว์เซอร์ที่ไม่รองรับ IntersectionObserver
      let lazyLoad = function() {
        for (let i = 0; i < lazyImages.length; i++) {
          if (lazyImages[i].getBoundingClientRect().top <= window.innerHeight && lazyImages[i].getBoundingClientRect().bottom >= 0 && getComputedStyle(lazyImages[i]).display !== "none") {
            lazyImages[i].src = lazyImages[i].dataset.src;
            lazyImages[i].classList.remove("lazyload");
          }
        }
      };
  
      lazyLoad();
      window.addEventListener("scroll", lazyLoad);
      window.addEventListener("resize", lazyLoad);
      window.addEventListener("orientationchange", lazyLoad);
    }
  });

  return (
    <>
      <div>
        <div>
          <TopNav/>
        </div>
        <div className='shadow-lg'>
          <PromotionsSlide/>
        </div>
        <div className='ml-10 gap-5 py-5'>
          <div className='Shops'>
            <h2 className='font-bold text-4xl'>Shops</h2>
            <Shops/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
