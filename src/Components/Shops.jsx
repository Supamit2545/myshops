import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import axios from 'axios'

function Shops() {
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

      
    const [shops ,setShops] = useState([])
    const navigate = useNavigate()
    axios.get("http://localhost:3001/read").then((response)=>[
        setShops(response.data)
    ])

    const EnterPages = (Id) =>{
        console.log(Id)
        if(Id == 1){
            navigate('/rungpeakshop')
        }if(Id == 2){
            navigate('/AoilyShop') 
        }
    }
  return (
    <div className='bg-gray-500 py-10 px-10 rounded-3xl'>
        <div>
            <div className='w-4/5 mt-10'>
                <div className='flex gap-10'>
                    {shops.map((val, index)=>{
                        return(
                            <div key={index} className='w-1/5 space-y-2 border-2 shadow-2xl rounded-3xl bg-white'>
                                <div className='w-2/4 '><img className='ml-20 mt-5 rounded-3xl' src={val.img} alt="" /></div>
                                <div className='pt-10'>
                                    <div className='text-xl font-bold ml-5'>{val.name}</div>
                                    <div className=' mx-5 flex-wrap my-5'>
                                        <div className='font-bold'>คำอธิบาย</div>
                                        {val.infomations}
                                    </div>
                                    <div className=' ml-5'>
                                        <div className='my-2'>ประเภท</div>
                                        <div className='text-xl font-bold mb-5'>{val.catagory}</div>
                                    </div>
                                    <div className='text-end mx-5 my-2'>
                                        <button className=' bg-green-500 rounded-full px-2 py-1 text-white font-bold 'onClick={() => {EnterPages(val.Id)}}>เข้าชม</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}
export default Shops