import React from 'react'
import TopNav from '../../Components/TopNav'
import './aoilyShop.css'
function AoilyShop() {
  return (
    <div>
      <title>AoiShops</title>
        <TopNav/>
        <div className='header text-center mt-5'>
          <h2 className='text-3xl font-bold text-pink-500 underline'>Welcome to AoilyItemsShop</h2>
        </div>
        <div className='content mx-auto my-10'>
          <div className='RecommendContent'>
            <div className=''>
              <p className='text-3xl font-bold ml-5'>Recommend</p>
              <div className='Recommend-Products'>
              <div className='w-1/6 shadow-2xl border-2 rounded-2xl overflow-hidden'>
                  <div className=''>IMG</div>
                  <div className='mt-20 font-bold px-5'>Name</div>
                  <div className='ml-10'>discrip : aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                  <div className='flex justify-end mt-16'>
                    <div className='mr-20'>Price</div>
                    <button className='border-2 rounded-2xl px-2 font-bold py-1 bg-green-500 hover:bg-green-700'>เพิ่มลงตะกร้า</button>
                    <button className='border-2 rounded-2xl px-2 font-bold py-1 bg-orange-500 hover:bg-orange-700'>ซื้อเลย</button>
                  </div>
                </div>
                <div className='w-1/6 shadow-2xl border-2 rounded-2xl overflow-hidden'>
                  <div className=''>IMG</div>
                  <div className='mt-20 font-bold px-5'>Name</div>
                  <div className='ml-10'>discrip : aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                  <div className='flex justify-end mt-16'>
                    <div className='mr-20'>Price</div>
                    <button className='border-2 rounded-2xl px-2 font-bold py-1 bg-green-500 hover:bg-green-700'>เพิ่มลงตะกร้า</button>
                    <button className='border-2 rounded-2xl px-2 font-bold py-1 bg-orange-500 hover:bg-orange-700'>ซื้อเลย</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='products-content'>
            <div>Product</div>
            <div>
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default AoilyShop