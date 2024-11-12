import React from 'react'
import Hero from '../components/Hero'
import MyCarousel from '../components/MyCarousel'

const Home = ({addToCart}) => {
  const cardMap = [
    {number: 1, image: 'https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg',  title: 'Danisco CHOOZIT MM Mesophilic Culture...', money: '1300/- pc.', del: '1800', btn: 'Add'},
    {number: 2, image: 'https://images.unsplash.com/photo-1708746333908-3bd1463b85e6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Allspice Berries (100g)', money: '200/- pc.', del: '320', btn: 'Add'},
    {number: 3, image: 'https://images.unsplash.com/photo-1490026220125-b42f3d66abd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Ground Red Pepper (100g)', money: '380/- pc.', del: '400', btn: 'Add'},
    {number: 4, image: 'https://plus.unsplash.com/premium_photo-1725878604678-68e06c0387f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Ground Nutmeg (100g)', money: '420/- pc.', del: '560', btn: 'Add'},
    {number: 5, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Hard Cheese Mold 1 kg', money: '1300/- pc.', del: '1800', btn: 'Add'},
    {number: 6, image: 'https://images.unsplash.com/photo-1566373104181-133b57c9fd98?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Allspice Berries (100g)', money: '200/- pc.', del: '320', btn: 'Add'},
    {number: 7, image: 'https://images.unsplash.com/photo-1484216287461-d8f62bc4d22a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg',title: 'Ground Red Pepper (100g)', money: '380/- pc.', del: '400', btn: 'Add'},
    {number: 8, image: 'https://images.unsplash.com/photo-1504394448285-7adeab975d7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Ground Nutmeg (100g)', money: '420/- pc.', del: '560', btn: 'Add'},
    {number: 9, image: 'https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg',  title: 'Danisco CHOOZIT MM Mesophilic Culture...', money: '1300/- pc.', del: '1800', btn: 'Add'},
    {number: 10, image: 'https://images.unsplash.com/photo-1708746333908-3bd1463b85e6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Allspice Berries (100g)', money: '200/- pc.', del: '320', btn: 'Add'},
    {number: 11, image: 'https://images.unsplash.com/photo-1490026220125-b42f3d66abd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Ground Red Pepper (100g)', money: '380/- pc.', del: '400', btn: 'Add'},
    {number: 12, image: 'https://plus.unsplash.com/premium_photo-1725878604678-68e06c0387f2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Ground Nutmeg (100g)', money: '420/- pc.', del: '560', btn: 'Add'},
    {number: 13, image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Hard Cheese Mold 1 kg', money: '1300/- pc.', del: '1800', btn: 'Add'},
    {number: 14, image: 'https://images.unsplash.com/photo-1566373104181-133b57c9fd98?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Allspice Berries (100g)', money: '200/- pc.', del: '320', btn: 'Add'},
    {number: 15, image: 'https://images.unsplash.com/photo-1484216287461-d8f62bc4d22a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg',title: 'Ground Red Pepper (100g)', money: '380/- pc.', del: '400', btn: 'Add'},
    {number: 16, image: 'https://images.unsplash.com/photo-1504394448285-7adeab975d7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', img: '/images/card-images/Group 275.svg', title: 'Ground Nutmeg (100g)', money: '420/- pc.', del: '560', btn: 'Add'},
  ]

  return (
    <div>
      <img className='w-full py-10 h-[90vh]' src="https://i0.wp.com/picjumbo.com/wp-content/uploads/yummy-pizza-with-salami-and-cheese-free-photo.jpg?w=2210&quality=70" alt="" />
      <div className='flex gap-5'>
        <Hero />
        <div >
          <div className='flex items-center gap-3'>
            <p className='text-[#FD9339] font-bold '>Popular Products</p>
            <p className='text-[#808080] font-bold'>Promotions</p>
          </div>
          <p className='font-bold text-[#4E2D2D] text-[24px] py-8'>Ingredients</p>
          <div className='grid grid-cols-4 gap-5'>
            {cardMap.map((item, index) => (
              <div key={index}>
                <div className=" max-w-[250px] bg-white border border-gray-200 rounded-lg shadow ">
                  <a href="ProductCard">
                    <img className="px-8 pt-5 rounded-t-lg" src={item.image} alt="product image" />
                    <img className='mx-auto' src={item.img} alt="" />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="ProductCard">
                      <h5 className="text-[16px] font-semibold tracking-tight pt-5">{item.title}</h5>
                    </a>
                    <hr className='my-4'/>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-[16px] font-bold block">{item.money}</span>
                          <span className="text-[16px] text-[#f65b5b] line-through">{item.del}</span>
                        </div>
                        <button onClick={() => addToCart({item})  } className='bg-[#FD9339] text-white rounded-lg px-3 py-2'>{item.btn}</button>
                      </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='py-20'>
        <img src="https://images.unsplash.com/photo-1600891965483-0a429ebf9076?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />  
      </div>
      <div>
        <p className='font-bold text-[#4E2D2D] text-[28px] pb-5'>We've Selected for You</p>
        <div className='flex items-center justify-between'>
          <img style={{ width: '600px', height: '400px', borderRadius: '3px' }} src="https://plus.unsplash.com/premium_photo-1681401570328-7b218c7cebd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img style={{ width: '600px', height: '400px', borderRadius: '3px' }} src="https://images.unsplash.com/photo-1681725271035-7270a7464f5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
      <div>
        <p className='font-bold text-[#4E2D2D] text-[28px] pt-20 pb-5'>Our Equipment</p>
        <img className='w-full' src="https://images.unsplash.com/photo-1722232183086-32395a4ebc52?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className='flex justify-center flex-wrap pt-20 pb-44'>
        <div className="w-[350px] bg-white border border-gray-200 rounded-lg shadow ">
          <a href="#">
              <img className="rounded-t-lg" src="https://images.unsplash.com/photo-1707037489765-1a12e1f90164?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-[] font-bold tracking-tight text-[#4E2D2D]">Cheese Plate</h5>
            </a>
            <p className="mb-3 font-normal ">This is the name of a dish that consists of different types of cheese. </p>
            <a href="#" className="flex items-center py-1 text-sm font-medium text-center text-[#FD9339]">Read more 
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <MyCarousel/>
    </div>
  )
}

export default Home