import React from 'react'

export default function Cart({ cartItems, totalCost ,onRemoveFromCart }) {
    return (
        
      






          <div className="min-h-screen bg-gray-100 pt-20">
             <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            {cartItems.length===0?<p className="text-center py-4">Cart Empty</p>:(<> 
  <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
    <div className="rounded-lg md:w-2/3">

      {cartItems.map((item) => (
 <div key={item.id} className="justify-between mb-6 relative rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
 <img
   src={item.image}
   alt="product-image"
   className="w-28 h-28 object-contain rounded-lg sm:w-40"
 />
 <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
   <div className="mt-5 sm:mt-0">
     <h2 className="text-lg font-bold text-gray-900">
      {item.title}
     </h2>
     <p className="mt-1 mb-0 text-xs text-gray-700">{item.price}</p>
     <p className="text-sm"> <span className='font-semibold'>Qty</span>: {item.quantity} 
     { " "}<span className='font-semibold'>Total</span>: ${item.price * item.quantity}</p>
   </div>
   <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
  
     <div className=" items-center space-x-4">
       <svg
       onClick={() => onRemoveFromCart(item.id)}
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth="1.5"
         stroke="currentColor"
         className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 absolute top-4 right-4"
       >
         <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="M6 18L18 6M6 6l12 12"
         />
       </svg>
     </div>
   </div>
 </div>
</div>
      ))}

    </div>
    {/* Sub total */}
    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">${totalCost}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">$4.99</p>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div className="">
          <p className="mb-1 text-lg font-bold">${totalCost + 4.99}</p>
          <p className="text-sm text-gray-700">including VAT</p>
        </div>
      </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
        Check out
      </button>
    </div>
  </div></>
)}
        </div>
      );
}
