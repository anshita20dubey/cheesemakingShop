import React from 'react'

const Footer = () => {
    const footerMap = [
        { number: 1, title: 'All materials on this site are copyrighted.', title2: 'Website development: Anshita', image: 'https://t4.ftcdn.net/jpg/01/15/27/23/360_F_115272378_fv3P6LkGJcKbssLsNxyUehZeywIB0HvW.jpg' },
    ]

    const footerMap2 = [
        { number: 1, title: 'Company', title2: 'About Us', title3: 'Promotions and Discounts', title4: 'Delivery and Payment', title5: 'Reviews', title6: 'Warranty and Returns' },
        { number: 2, title: 'Support', title2: 'FAQ', title3: 'Loyalty Program', title4: 'Privacy Policy', title5: 'Personal Data' },
    ]

    const footerMap3 = [
        { number: 1, phone: '+91 95432 76549', hour: 'Mon-Fri 9:00 AM - 7:00 PM', location: 'Indore, Freedom Street 1/7' }
    ]

    return (
        <div className='flex flex-wrap justify-between text-[#292929] gap-5 py-20'>
            {footerMap.map((item, index) => (
                <div key={index} className="w-[250px]">
                    <img src={item.image} className="img-fluid py-1" alt={item.title} />
                    <h1 className='text-[#808080] py-2'>{item.title}</h1>
                    <h1 className='py-2'>{item.title2}</h1>
                </div>
            ))}
            {footerMap2.map((item, index) => (
                <div key={index} className="">
                    <h1 className='font-bold pt-3 pb-5'>{item.title}</h1>
                    <h1 className='py-1'>{item.title2}</h1>
                    <h1 className='py-1'>{item.title3}</h1>
                    <h1 className='py-1'>{item.title4}</h1>
                    <h1 className='py-1'>{item.title5}</h1>
                    <h1 className='py-1'>{item.title6}</h1>
                </div>
            ))}
            <div className="">
                <h1 className='font-bold py-3'>Payment Methods</h1>
                <div className=''>
                    <div className='flex items-center flex-wrap gap-3 py-2'>
                        <h1 className="img-fluid text-3xl"><i class="ri-paypal-fill"></i></h1>
                        <h1 className="img-fluid text-3xl"><i class="ri-alipay-fill"></i></h1>
                        <h1 className="img-fluid text-3xl"><i class="ri-currency-fill"></i></h1>
                        <h1 className="img-fluid text-3xl"><i class="ri-money-dollar-circle-fill"></i></h1>
                    </div>
                </div>
            </div>
            {footerMap3.map((item, index) => (
                <div key={index} className="">
                    <h1 className='font-bold py-3'>{item.phone}</h1>
                    <h1 className='py-1'>{item.hour}</h1>
                    <h1 className='py-1'>{item.location}</h1>
                    <div className='flex items-center gap-3 flex-wrap '>
                        <h1 className="img-fluid text-2xl"><i class="ri-instagram-fill"></i></h1>
                        <h1 className="img-fluid text-2xl"><i class="ri-twitter-x-fill"></i></h1>
                        <h1 className="img-fluid text-2xl"><i class="ri-facebook-box-fill"></i></h1>
                        <h1 className="img-fluid text-2xl"><i class="ri-youtube-fill"></i></h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Footer