import React from "react";
import { Link } from "react-router-dom";

export default function CardDraw({
  cartDraw,
  shadow,
  cartItems,
  totalCost,
  onRemoveFromCart,
  setCartDraw,
}) {
  return (
    <>
      <div
        onClick={() => setCartDraw(true)}
        className={`${
          cartDraw ? "hidden" : ""
        }  z-30 fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity`}
      />
      <div
        className={`${
          cartDraw ? "hidden" : ""
        } z-30 fixed inset-0 overflow-hidden`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-lg font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Close panel</span>
                        <svg
                          onClick={() => setCartDraw(true)}
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {cartItems.map((item) => (
                          <li className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={item.image}
                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                className="h-full w-full object-cover object-center"
                              />
                            </div>
                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3 className="text-base">
                                    <a href="#">{item.title}</a>
                                  </h3>
                                  <p className="ml-4">{item.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Salmon
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  Qty {item.quantity}
                                </p>
                                <div className="flex">
                                  <button
                                    onClick={() => onRemoveFromCart(item.id)}
                                    type="button"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${totalCost}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500 text-center">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <Link to="cart">
                      <a className="btn btn-primary !block">Checkout</a>
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <Link to="collection">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Continue Shopping
                          <span aria-hidden="true"> →</span>
                        </button>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
