import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cart, setCart }) => {
  const [quantities, setQuantities] = useState(cart.map(() => 1));

  // Helper function to safely parse price
  const parsePrice = (price) => {
    if (typeof price === 'number') {
      return price;
    }
    if (typeof price === 'string') {
      // Remove currency symbols and parse
      const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ''));
      return isNaN(numericPrice) ? 0 : numericPrice;
    }
    return 0;
  };

  const handleIncrease = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrease = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleRemove = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    const newQuantities = quantities.filter((_, i) => i !== index);
    setQuantities(newQuantities);
  };

  const calculateItemTotal = (item, quantity) => {
    const price = parsePrice(item.price);
    return (price * quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item, index) => {
      const price = parsePrice(item.price);
      const quantity = quantities[index] || 1;
      return total + (price * quantity);
    }, 0).toFixed(2);
  };

  return (
    <div>
      <h2 className='text-[#4E2D2D] text-[28px] font-bold my-5'>Order Checkout</h2>
      {cart.length === 0 ? (
        <p className='flex flex-col justify-center items-center font-bold text-3xl h-[80vh] bg-white mb-5'>
          <img className='mb-5' src="../src/assets/icons/Vector (2).svg" alt="Cart is empty" />
          Your cart is empty
          <Link to='/'>
            <button className='bg-[#FD9339] text-white text-[16px] font-normal px-5 py-1 rounded-md mt-10'>
              Go to Products
            </button>
          </Link>
        </p>
      ) : (
        <div className='flex flex-wrap justify-between'>
          <div>
            <div className='bg-[#fff] p-5 w-[780px]'>
              <p className='text-[20px] text-[#4E2D2D] font-semibold'>Contact Information:</p>
              <hr className='my-5' />
              <div className='flex flex-wrap justify-between items-center gap-5'>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='fullName' className='block mb-2 text-sm font-medium'>Full Name</label>
                  <input type='text' id='fullName' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='John Smith' />
                </form>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium'>Email Address</label>
                  <input type='email' id='email' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='john.smith@gmail.com' />
                </form>
              </div>
            </div>
            {/* Cart Items Section */}
            <div className='p-5 bg-white my-5 w-[780px]'>
              <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-lg'>Order</h2>
                <div className='text-right'>Total amount 780/-</div>
              </div>
              <hr className='my-5' />
              {cart.map((item, index) => (
                <div key={index} className='flex justify-between items-center mb-4 p-4 border rounded'>
                  <div className='flex items-center space-x-4'>
                    <img
                      className='w-24 h-24 object-cover rounded'
                      src={item.image}
                      alt={item.title}
                    />
                    <div>
                      <h5 className='text-lg font-semibold text-gray-900'>{item.title}</h5>
                      <p className='text-gray-600'>670/-</p>
                      <button
                        className='text-[#FD9339] underline decoration-solid cursor-pointer'
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className='flex items-center space-x-4'>
                    <div className='flex items-center border rounded'>
                      <button
                        onClick={() => handleDecrease(index)}
                        className='px-3 py-1 hover:bg-gray-100'
                      >
                        −
                      </button>
                      <input
                        type='text'
                        className='w-12 text-center border-x py-1'
                        value={quantities[index]}
                        readOnly
                      />
                      <button
                        onClick={() => handleIncrease(index)}
                        className='px-3 py-1 hover:bg-gray-100'
                      >
                        +
                      </button>
                    </div>
                    <div className='font-semibold min-w-[80px] text-right'>
                      670/-
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='p-5 bg-white my-5 w-[780px]'>
              <p className='font-bold text-[20px]'>Choose Delivery Method:</p>
              <hr className='my-5' />
              <div className='flex items-center gap-5'>
                <input type='radio' name='delivery' />
                <p>Free Delivery <span className='text-[#FD9339]'>($0)</span></p>
              </div>
              <div className='flex items-center gap-5 mt-2'>
                <input type='radio' name='delivery' />
                <p>Courier <span className='text-[#FD9339]'>($0)</span></p>
              </div>
              <p className='font-bold text-[20px] mt-5'>Your Delivery Information:</p>
              <hr className='my-5' />
              <div className='flex flex-wrap justify-between items-center gap-5'>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='deliveryName' className='block mb-2 text-sm font-medium'>Full Name</label>
                  <input type='text' id='deliveryName' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='John Smith' />
                </form>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='phone' className='block mb-2 text-sm font-medium'>Phone Number</label>
                  <input type='tel' id='phone' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='+91 93478 90870' />
                </form>
              </div>
              <div className='flex items-center gap-5 my-5'>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='country' className='block mb-2 text-sm font-medium'>Select Country</label>
                  <select id='country' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'>
                    <option>India</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                  </select>
                </form>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='region' className='block mb-2 text-sm font-medium'>Select Region</label>
                  <select id='region' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5'>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Pune</option>
                    <option>Banglore</option>
                  </select>
                </form>
              </div>
              <div className='flex flex-wrap justify-between items-center gap-5'>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='address' className='block mb-2 text-sm font-medium'>Street Address, Apt/Suite</label>
                  <input type='text' id='address' className='outline-none rounded-lg border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5' placeholder='123 Main St, Apt 4B' />
                </form>
                <form className='w-[48%] mx-auto'>
                  <label htmlFor='postalCode' className='block mb-2 text-sm font-medium'>Pin Code</label>
                  <input type='text' id='postalCode' className='outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5' placeholder='457231' />
                </form>
              </div>
              <div className='flex items-center my-5'>
                <input type='checkbox' id='privacyPolicy' className='w-4 h-4' />
                <label htmlFor='privacyPolicy' className='ms-2 text-sm font-medium text-gray-500'>I agree to the processing of personal data in accordance with the <a href='#' className='hover:underline text-[#FD9339]'>privacy policy</a>.</label>
              </div>
            </div>
            <div className='bg-white p-5'>
              <div className='flex items-center mb-4'>
                <input type='radio' id='paymentOption1' name='payment' className='w-4 h-4' />
                <label htmlFor='paymentOption1' className='block ms-2 text-sm font-medium text-gray-900'>Online Payment</label>
              </div>
              <div className='flex items-center mb-4'>
                <input type='radio' id='paymentOption2' name='payment' className='w-4 h-4' />
                <label htmlFor='paymentOption2' className='block ms-2 text-sm font-medium text-gray-900'>Cash Payment</label>
              </div>
              <div className='flex items-center mb-4'>
                <input type='radio' id='paymentOption3' name='payment' className='w-4 h-4' />
                <label htmlFor='paymentOption3' className='block ms-2 text-sm font-medium text-gray-900'>Credit Cards / Internet Banking / QIWI / PayPal</label>
              </div>
            </div>
          </div>
          {/* Order Summary Section */}
          <div className='px-5 pb-5 text-[#4E2D2D] bg-[#FEF0C2] w-[400px] h-[500px] grid grid-rows-8 items-center'>
            <p className='text-[20px] font-bold'>Order Summary</p>
            <p className='font-semibold'>Have a promo code?</p>
            <div className='bg-[#fff] flex items-center justify-between p-2 rounded-md'>
              <p className='font-semibold'>SAVE2024</p>
              <p className='font-bold cursor-pointer'>Apply</p>
            </div>
            <div className='flex items-center justify-between font-semibold mt-5'>
              <p>Order Amount</p>
              <p>670/-</p>
            </div>
            <div className='flex items-center justify-between font-semibold'>
              <p>Delivery</p>
              <p>90.00/-</p>
            </div>
            <div className='flex items-center justify-between font-semibold mb-6'>
              <p>Promo Code</p>
              <p>30.00/-</p>
            </div>
            <div className='flex items-center justify-between font-bold'>
              <p>Total Payment</p>
              <p>780/-</p>
            </div>
            <button className='bg-[#FD9339] rounded-md text-[#fff] w-full py-3'>
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;