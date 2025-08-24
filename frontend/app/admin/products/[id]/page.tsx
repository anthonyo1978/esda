'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

// Mock data - in a real application, this would come from an API
const mockProduct = {
  id: 1,
  name: 'Sample Product',
  price: 99.99,
  category: 'Electronics',
  stock: 100,
  description: 'This is a sample product description.',
  createdAt: '2024-03-20',
  updatedAt: '2024-03-20'
};

export default function ProductDetail() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id;

  // In a real application, you would fetch the product data using the ID
  const product = mockProduct;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Product Details</h1>
        <div className="space-x-4">
          <Link
            href={`/admin/products/${productId}/edit`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Product
          </Link>
          <button
            onClick={() => {
              if (confirm('Are you sure you want to delete this product?')) {
                // Here you would typically make an API call to delete the product
                alert('Delete functionality will be implemented');
                router.push('/admin/products');
              }
            }}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Product
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Name</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.name}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Price</dt>
                <dd className="mt-1 text-sm text-gray-900">${product.price}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Category</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.category}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Stock</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.stock}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Additional Information</h2>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500">Description</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.description}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Created At</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.createdAt}</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Last Updated</dt>
                <dd className="mt-1 text-sm text-gray-900">{product.updatedAt}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
} 