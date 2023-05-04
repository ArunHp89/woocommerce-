import React, { useState } from "react";

export default function Filters({ data, setData, orgData }) {
  const [sort, setSort] = useState(false);
  const [color, setColor] = useState(false);
  const [category, setCategory] = useState(false);
  const [size, setSize] = useState(false);
  const categoryFilter = (e) => {
    const ctf = e.target.value;
    const filter = orgData.filter((item) => {
      if (item.category == ctf) {
        return item;
      } else setData(orgData);
    });
    return setData(filter);
  };
  return (
    <form className="hidden lg:block">
      <h3 className="sr-only">Categories</h3>
      <ul
        role="list"
        className="flex flex-column space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
      >
        <li className="relative inline-block w-auto">
          <input
            className="absolute opacity-0 left-0 right-0 top-0 bottom-0"
            onClick={categoryFilter}
            value="men's clothing"
            type="checkbox"
          />
          <span>Men's clothing</span>
        </li>
        <li className="relative inline-block w-auto">
          <input
            className="absolute opacity-0 left-0 right-0 top-0 bottom-0"
            onClick={categoryFilter}
            value="women's clothing"
            type="checkbox"
          />
          <span>Women's clothing</span>
        </li>
        <li className="relative inline-block w-auto">
          <input
            className="absolute opacity-0 left-0 right-0 top-0 bottom-0"
            onClick={categoryFilter}
            value="jewelery"
            type="checkbox"
          />
          <span>Jewelery</span>
        </li>
        <li className="relative inline-block w-auto">
          <input
            className="absolute opacity-0 left-0 right-0 top-0 bottom-0"
            onClick={categoryFilter}
            value="electronics"
            type="checkbox"
          />
          <span>Electronics</span>
        </li>
      </ul>
      <div className="border-b border-gray-200 py-6">
        <h3 className="-my-3 flow-root">
          {/* Expand/collapse section button */}
          <button
            type="button"
            onClick={() => (color ? setColor(!color) : setColor(!color))}
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
          >
            <span className="font-medium text-gray-900">Color</span>
            <span className="ml-6 flex items-center">
              {/* Expand icon, show/hide based on section open state. */}
              {color ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              )}
            </span>
          </button>
        </h3>
        {/* Filter section, show/hide based on section state. */}
        <div className={`${color == true ? "" : "hidden"} "pt-6" `}>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-color-0"
                name="color[]"
                defaultValue="white"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-color-0"
                className="ml-3 text-sm text-gray-600"
              >
                White
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-1"
                name="color[]"
                defaultValue="beige"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-color-1"
                className="ml-3 text-sm text-gray-600"
              >
                Beige
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-2"
                name="color[]"
                defaultValue="blue"
                type="checkbox"
                defaultChecked=""
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-color-2"
                className="ml-3 text-sm text-gray-600"
              >
                Blue
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-3"
                name="color[]"
                defaultValue="brown"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-color-3"
                className="ml-3 text-sm text-gray-600"
              >
                Brown
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-4"
                name="color[]"
                defaultValue="green"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-color-4"
                className="ml-3 text-sm text-gray-600"
              >
                Green
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-5"
                name="color[]"
                defaultValue="purple"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-color-5"
                className="ml-3 text-sm text-gray-600"
              >
                Purple
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 py-6">
        <h3 className="-my-3 flow-root">
          {/* Expand/collapse section button */}
          <button
            type="button"
            onClick={() =>
              category ? setCategory(!category) : setCategory(!category)
            }
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
          >
            <span className="font-medium text-gray-900">Category</span>
            <span className="ml-6 flex items-center">
              {/* Expand icon, show/hide based on section open state. */}
              {category ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              )}
            </span>
          </button>
        </h3>
        {/* Filter section, show/hide based on section state. */}
        <div className={`${category == true ? "" : "hidden"} "pt-6" `}>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-category-0"
                name="category[]"
                defaultValue="new-arrivals"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-category-0"
                className="ml-3 text-sm text-gray-600"
              >
                Our Collection
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-category-1"
                name="category[]"
                defaultValue="sale"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-category-1"
                className="ml-3 text-sm text-gray-600"
              >
                Sale
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-category-2"
                name="category[]"
                defaultValue="travel"
                type="checkbox"
                defaultChecked=""
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-category-2"
                className="ml-3 text-sm text-gray-600"
              >
                Travel
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-category-3"
                name="category[]"
                defaultValue="organization"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-category-3"
                className="ml-3 text-sm text-gray-600"
              >
                Organization
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-category-4"
                name="category[]"
                defaultValue="accessories"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-category-4"
                className="ml-3 text-sm text-gray-600"
              >
                Accessories
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200 py-6">
        <h3 className="-my-3 flow-root">
          {/* Expand/collapse section button */}
          <button
            onClick={() => (size ? setSize(!size) : setSize(!size))}
            type="button"
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
          >
            <span className="font-medium text-gray-900">Size</span>
            <span className="ml-6 flex items-center">
              {/* Expand icon, show/hide based on section open state. */}
              {size ? (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              )}
            </span>
          </button>
        </h3>
        {/* Filter section, show/hide based on section state. */}
        <div className={`${size == true ? "" : "hidden"} "pt-6" `}>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-size-0"
                name="size[]"
                defaultValue="2l"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-size-0"
                className="ml-3 text-sm text-gray-600"
              >
                2L
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-size-1"
                name="size[]"
                defaultValue="6l"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-size-1"
                className="ml-3 text-sm text-gray-600"
              >
                6L
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-size-2"
                name="size[]"
                defaultValue="12l"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-size-2"
                className="ml-3 text-sm text-gray-600"
              >
                12L
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-size-3"
                name="size[]"
                defaultValue="18l"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-size-3"
                className="ml-3 text-sm text-gray-600"
              >
                18L
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-size-4"
                name="size[]"
                defaultValue="20l"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-size-4"
                className="ml-3 text-sm text-gray-600"
              >
                20L
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-size-5"
                name="size[]"
                defaultValue="40l"
                type="checkbox"
                defaultChecked=""
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="filter-size-5"
                className="ml-3 text-sm text-gray-600"
              >
                40L
              </label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
