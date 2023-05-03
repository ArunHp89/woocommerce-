import React from "react";

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-800">
        <div className="flex justify-center border-t border-gray-700 py-5">
          <a href="#" className="text-white mx-1">
            Articles
          </a>
          <a href="#" className="text-gray-600 mx-1 hover:text-gray-500">
            Recommends
          </a>
          <a href="#" className="text-gray-600 mx-1 hover:text-gray-500">
            Subscriptions
          </a>
        </div>
      </div>
      <div className="bg-gray-900 pt-12 pb-6 flex-1">
        <div className="container mx-auto">
          <div className="flex flex-wrap md:-mx-3">
            <div className="md:w-1/2 px-3 mb-6 w-full">
              <div
                className="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1513438205128-16af16280739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80)",
                }}
              >
                <h2 className="text-white text-lg mb-2">
                  Is The Herbal Way The Right Way
                </h2>
                <p className="text-white opacity-50">
                  Adwords Keyword Research For Beginners
                </p>
                <div className="flex flex-wrap justify-between items-center mt-auto pt-6">
                  <div className="inline-flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                    </div>
                    <div className="flex-1 pl-2">
                      <h2 className="text-white mb-1">Ollie McBride</h2>
                      <p className="text-white opacity-50 text-xs">May 18</p>
                    </div>
                  </div>
                  <span className="text-white opacity-50">
                    <svg
                      className="fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 459 459"
                    >
                      <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3 mb-6 w-full">
              <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                <div className="w-2/6">
                  <img
                    className="object-cover h-full w-full"
                    src="https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80"
                  />
                </div>
                <div className="w-4/6 p-5">
                  <h2 className="text-white leading-normal text-lg">
                    How To Boost Your Traffic Of Your Blog And Destroy The
                    Competition
                  </h2>
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <div className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/5.jpg" />
                      </div>
                      <div className="flex-1 pl-2">
                        <h2 className="text-white mb-1">Luke Nunez</h2>
                        <p className="text-white opacity-50 text-xs">May 18</p>
                      </div>
                    </div>
                    <span className="text-white opacity-50">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                      >
                        <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3 mb-6 w-full">
              <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                <div className="w-2/6">
                  <img
                    className="object-cover h-full w-full"
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  />
                </div>
                <div className="w-4/6 p-5">
                  <h2 className="text-white leading-normal text-lg">
                    How To Boost Your Traffic Of Your Blog And Destroy The
                    Competition
                  </h2>
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <div className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                      </div>
                      <div className="flex-1 pl-2">
                        <h2 className="text-white mb-1">Jonathan Mithu</h2>
                        <p className="text-white opacity-50 text-xs">May 18</p>
                      </div>
                    </div>
                    <span className="text-white opacity-50">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                      >
                        <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3 mb-6 w-full">
              <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                <div className="w-2/6">
                  <img
                    className="object-cover h-full w-full"
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  />
                </div>
                <div className="w-4/6 p-5">
                  <h2 className="text-white leading-normal text-lg">
                    How To Boost Your Traffic Of Your Blog And Destroy The
                    Competition
                  </h2>
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <div className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/11.jpg" />
                      </div>
                      <div className="flex-1 pl-2">
                        <h2 className="text-white mb-1">Chris Sonne</h2>
                        <p className="text-white opacity-50 text-xs">May 18</p>
                      </div>
                    </div>
                    <span className="text-white opacity-50">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                      >
                        <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3 mb-6 w-full">
              <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                <div className="w-2/6">
                  <img
                    className="object-cover h-full w-full"
                    src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU1MzA3fQ&auto=format&fit=crop&w=2250&q=80"
                  />
                </div>
                <div className="w-4/6 p-5">
                  <h2 className="text-white leading-normal text-lg">
                    How To Boost Your Traffic Of Your Blog And Destroy The
                    Competition
                  </h2>
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <div className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/33.jpg" />
                      </div>
                      <div className="flex-1 pl-2">
                        <h2 className="text-white mb-1">Mike Olle</h2>
                        <p className="text-white opacity-50 text-xs">May 18</p>
                      </div>
                    </div>
                    <span className="text-white opacity-50">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                      >
                        <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 px-3 mb-6 w-full">
              <div
                className="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden"
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1539623704225-548826dc5a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)",
                }}
              >
                <h2 className="text-white text-lg mb-2">
                  Is The Herbal Way The Right Way
                </h2>
                <p className="text-white opacity-50">
                  Adwords Keyword Research For Beginners
                </p>
                <div className="flex flex-wrap justify-between items-center mt-auto pt-6">
                  <div className="inline-flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                      <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                    </div>
                    <div className="flex-1 pl-2">
                      <h2 className="text-white mb-1">Jack Roath</h2>
                      <p className="text-white opacity-50 text-xs">May 18</p>
                    </div>
                  </div>
                  <span className="text-white opacity-50">
                    <svg
                      className="fill-current w-5 h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 459 459"
                    >
                      <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-3 mb-6">
              <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                <div className="w-full">
                  <img
                    className="object-cover h-full w-full"
                    src="https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  />
                </div>
                <div className="w-full p-5">
                  <h2 className="text-white leading-normal text-lg">
                    How To Boost Your Traffic Of Your Blog And Destroy The
                    Competition
                  </h2>
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <div className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/22.jpg" />
                      </div>
                      <div className="flex-1 pl-2">
                        <h2 className="text-white mb-1">Chris Sonne</h2>
                        <p className="text-white opacity-50 text-xs">May 18</p>
                      </div>
                    </div>
                    <span className="text-white opacity-50">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                      >
                        <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-3 mb-6">
              <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                <div className="w-full">
                  <img
                    className="object-cover h-full w-full"
                    src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80"
                  />
                </div>
                <div className="w-full p-5">
                  <h2 className="text-white leading-normal text-lg">
                    How To Boost Your Traffic Of Your Blog And Destroy The
                    Competition
                  </h2>
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <div className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/23.jpg" />
                      </div>
                      <div className="flex-1 pl-2">
                        <h2 className="text-white mb-1">Chris Sonne</h2>
                        <p className="text-white opacity-50 text-xs">May 18</p>
                      </div>
                    </div>
                    <span className="text-white opacity-50">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                      >
                        <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-3 mb-6">
              <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                <div className="w-full">
                  <img
                    className="object-cover h-full w-full"
                    src="https://images.unsplash.com/photo-1565388161858-5ae922cbfde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80"
                  />
                </div>
                <div className="w-full p-5">
                  <h2 className="text-white leading-normal text-lg">
                    How To Boost Your Traffic Of Your Blog And Destroy The
                    Competition
                  </h2>
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <div className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/25.jpg" />
                      </div>
                      <div className="flex-1 pl-2">
                        <h2 className="text-white mb-1">Chris Sonne</h2>
                        <p className="text-white opacity-50 text-xs">May 18</p>
                      </div>
                    </div>
                    <span className="text-white opacity-50">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                      >
                        <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 px-3 mb-6">
              <div className="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
                <div className="w-full">
                  <img
                    className="object-cover h-full w-full"
                    src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2195&q=80"
                  />
                </div>
                <div className="w-full p-5">
                  <h2 className="text-white leading-normal text-lg">
                    How To Boost Your Traffic Of Your Blog And Destroy The
                    Competition
                  </h2>
                  <div className="flex flex-wrap justify-between items-center mt-6">
                    <div className="inline-flex items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <img src="https://randomuser.me/api/portraits/men/29.jpg" />
                      </div>
                      <div className="flex-1 pl-2">
                        <h2 className="text-white mb-1">Chris Sonne</h2>
                        <p className="text-white opacity-50 text-xs">May 18</p>
                      </div>
                    </div>
                    <span className="text-white opacity-50">
                      <svg
                        className="fill-current w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 459 459"
                      >
                        <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
