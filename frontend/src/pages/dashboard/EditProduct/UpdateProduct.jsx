import React, { useEffect } from 'react';
import InputField from '../AddProduct/InputField';
import SelectField from '../AddProduct/SelectField';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useFetchProductByIdQuery } from '../../../redux/features/products/productsApi';
import Loading from '../../../components/Loading';
import Swal from 'sweetalert2';
import axios from 'axios';
import getBaseUrl from '../../../utils/baseURL';

const UpdateProduct = () => {
  const { id } = useParams();
  const { data: productData, isLoading, isError, refetch } = useFetchProductByIdQuery(id);
  const { register, handleSubmit, setValue, reset } = useForm();

  useEffect(() => {
    if (productData) {
      const fields = ['title', 'description', 'category', 'trending', 'oldPrice', 'newPrice', 'coverImage'];
      fields.forEach((field) => setValue(field, productData[field]));
    }
  }, [productData, setValue]);

  const onSubmit = async (data) => {
    const updateProductData = {
      ...data,
      oldPrice: Number(data.oldPrice),
      newPrice: Number(data.newPrice),
      coverImage: data.coverImage || productData.coverImage,
    };

    try {
      await axios.put(`${getBaseUrl()}/api/products/edit/${id}`, updateProductData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      Swal.fire({
        title: 'Product Updated',
        text: 'Your product has been updated successfully!',
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });

      refetch();
      reset();
    } catch (error) {
      console.error('Failed to update product:', error);
      Swal.fire({
        title: 'Update Failed',
        text: 'An error occurred while updating the product. Please try again.',
        icon: 'error',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Close',
      });
    }
  };

  if (isLoading) return <Loading />;
  if (isError) return <div className="text-red-500">Error fetching product data.</div>;

  return (
    <div className="max-w-lg mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Update Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField label="Title" name="title" placeholder="Enter product title" register={register} />
        <InputField label="Description" name="description" placeholder="Enter product description" type="textarea" register={register} />
        <SelectField
          label="Category"
          name="category"
          options={[
            { value: '', label: 'Choose a category' },
            { value: 'gym equipment', label: 'Gym Equipment' },
            { value: 'gym accessories', label: 'Gym Accessories' },
            { value: 'sportswear', label: 'Sportswear' },
            { value: 'cardio equipment', label: 'Cardio Equipment' },
            { value: 'nutrition', label: 'Nutrition' },
          ]}
          register={register}
        />
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register('trending')}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">Trending</span>
          </label>
        </div>
        <InputField label="Old Price" name="oldPrice" type="number" placeholder="Old Price" register={register} />
        <InputField label="New Price" name="newPrice" type="number" placeholder="New Price" register={register} />
        <InputField label="Cover Image URL" name="coverImage" type="text" placeholder="Cover Image URL" register={register} />
        <button type="submit" className="w-full py-2 bg-blue-500 text-white font-bold rounded-md">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
