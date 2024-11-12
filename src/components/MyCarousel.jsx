import React, { useRef } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MyCarousel = () => {
  const cardMap = [
    {number: 1, image: 'https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg',  title: 'Danisco CHOOZIT MM Mesophilic Culture...', money: '1300/- pc.', del: '1800', btn: 'Add'},
    {number: 2, image: 'https://images.unsplash.com/photo-1708746333908-3bd1463b85e6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Allspice Berries (100g)', money: '200/- pc.', del: '320', btn: 'Add'},
    {number: 3, image: 'https://images.unsplash.com/photo-1490026220125-b42f3d66abd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Ground Red Pepper (100g)', money: '380/- pc.', del: '400', btn: 'Add'},
    {number: 4, image: 'https://plus.unsplash.com/premium_photo-1725878604678-68e06c0387f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Ground Nutmeg (100g)', money: '420/- pc.', del: '560', btn: 'Add'},
    {number: 5, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Hard Cheese Mold 1 kg', money: '1300/- pc.', del: '1800', btn: 'Add'},
    {number: 6, image: 'https://images.unsplash.com/photo-1566373104181-133b57c9fd98?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Allspice Berries (100g)', money: '200/- pc.', del: '320', btn: 'Add'},
    {number: 7, image: 'https://images.unsplash.com/photo-1484216287461-d8f62bc4d22a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg',title: 'Ground Red Pepper (100g)', money: '380/- pc.', del: '400', btn: 'Add'},
    {number: 8, image: 'https://images.unsplash.com/photo-1504394448285-7adeab975d7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Ground Nutmeg (100g)', money: '420/- pc.', del: '560', btn: 'Add'},
  ];

  const viewedProductsRef = useRef(null);
  const scrollLeft = () => {
    if (viewedProductsRef.current) {
      viewedProductsRef.current.scrollLeft -= 200;
    }
  };
  const scrollRight = () => {
    if (viewedProductsRef.current) {
      viewedProductsRef.current.scrollLeft += 200;
    }
  };

  return (
    <>
      <div className='flex flex-wrap justify-between items-center py-8'>
        <p className='text-[24px] font-semibold text-[#4E2D2D]'>Viewed Products</p>
        <div className='flex gap-8'>
          <IoIosArrowBack id="chevronLeft" onClick={scrollLeft}/>
          <IoIosArrowForward id="chevronRight" onClick={scrollRight}/>
        </div>
      </div>
      <div className='flex gap-5 overflow-hidden' id="viewed_products" ref={viewedProductsRef} >
        {cardMap.map((item, index) => (
          <div key={index} >
            <div className="w-[220px] bg-white border border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img className="px-8 pt-5 rounded-t-lg" src={item.image} alt="item image" />
                <img className='mx-auto' src={item.img} alt="" />
              </a>
              <div className="px-5 pb-5">
                <a href="#">
                  <h5 className="text-[16px] font-semibold tracking-tight pt-5">{item.title}</h5>
                </a>
                <hr className='my-4'/>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[16px] font-bold block">{item.money}</span>
                    <span className="text-[16px] text-[#f65b5b] line-through">{item.del}</span>
                  </div>
                  <button className='bg-[#FD9339] text-white rounded-lg px-3 py-2'>{item.btn}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MyCarousel;