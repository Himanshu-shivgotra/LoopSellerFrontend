import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const AddNewProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    brand: '',
    imageUrl: '',
    originalPrice: '',
    discountedPrice: '',
    category: '',
    quantity: '',
    size: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/products/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Product added successfully!');
        // Reset form or redirect
        setProductData({
          title: '',
          brand: '',
          imageUrl: '',
          originalPrice: '',
          discountedPrice: '',
          category: '',
          quantity: '',
          size: '',
          description: '',
        });
      } else {
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error submitting product:', error);
      alert('An error occurred while adding the product.');
    }
  };

  return (
    <>
      <Breadcrumb pageName="Add New Product" />

      <div className="flex w-full">
        <div className="rounded-sm border w-full border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">Add New Product</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-6.5">
              {/* Product Title */}
              <div className="mb-4.5 flex gap-6 xl:flex-row">
                <div className="w-full md:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Product Title</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Enter Product Title"
                    value={productData.title}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                  />
                </div>

                {/* Product Brand */}
                <div className="w-full md:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Product Brand</label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Enter Product Brand Name"
                    value={productData.brand}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Product Image URL */}
              <div className="mb-4.5 w-full">
                <label className="mb-2.5 block text-black dark:text-white">Product Image URL</label>
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Enter Product URL"
                  value={productData.imageUrl}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                />
              </div>

              {/* Pricing */}
              <div className="mb-4.5 flex gap-6 xl:flex-row">
                <div className="w-full md:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Original Price</label>
                  <input
                    type="number"
                    name="originalPrice"
                    placeholder="Enter Original Price"
                    value={productData.originalPrice}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                  />
                </div>

                <div className="w-full md:w-1/2">
                  <label className="mb-2.5 block text-black dark:text-white">Discounted Price</label>
                  <input
                    type="number"
                    name="discountedPrice"
                    placeholder="Enter Discounted Price"
                    value={productData.discountedPrice}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Category, Quantity, and Size */}
              <div className="mb-4.5 flex gap-6 xl:flex-row">
                <div className="w-full md:w-[50%]">
                  <label className="mb-2.5 block text-black dark:text-white">Product Category</label>
                  <select
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                    className="w-full rounded border border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                  >
                    <option value="" disabled>Select your Category</option>
                    <option value="Supplement">Supplement</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Equipment">Equipment</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>

                <div className="w-full md:w-[25%]">
                  <label className="mb-2.5 block text-black dark:text-white">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    value={productData.quantity}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                  />
                </div>

                <div className="w-full md:w-[25%]">
                  <label className="mb-2.5 block text-black dark:text-white">Size</label>
                  <input
                    type="number"
                    name="size"
                    placeholder="Size"
                    value={productData.size}
                    onChange={handleChange}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <label className="mb-2.5 block text-black dark:text-white">Product Description</label>
                <textarea
                  name="description"
                  rows={3}
                  placeholder="Product Description"
                  value={productData.description}
                  onChange={handleChange}
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-orange-500 dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-orange-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewProduct;
