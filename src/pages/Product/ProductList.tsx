import React from 'react';

// Sample product data
const productData = [
  {
    title: 'Yoga Mat',
    price: 25.99,
    quantity: 50,
    color: 'Blue',
  },
  {
    title: 'Dumbbells Set',
    price: 45.0,
    quantity: 30,
    color: 'Black',
  },
  {
    title: 'Resistance Bands',
    price: 15.49,
    quantity: 70,
    color: 'Green',
  },
  {
    title: 'Fitness Tracker',
    price: 99.99,
    quantity: 20,
    color: 'Gray',
  },
  {
    title: 'Protein Powder',
    price: 35.0,
    quantity: 100,
    color: 'White',
  },
];

const ProductTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Product List
      </h4>

      <div className="flex flex-col">
        {/* Table Header */}
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Title
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Quantity
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Color
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>
        </div>

        {/* Table Rows */}
        {productData.map((product, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === productData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{product.title}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">${product.price}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{product.quantity}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{product.color}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
                Edit
              </button>
              <button className="ml-2 px-4 py-2 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
