import { useState } from 'react';
import { Plus, Search, Edit, Trash2, Eye } from 'lucide-react';

const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      category: 'Electronics',
      price: 79.99,
      stock: 45,
      status: 'In Stock',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 2,
      name: 'Smart Watch',
      category: 'Electronics',
      price: 199.99,
      stock: 23,
      status: 'In Stock',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 3,
      name: 'Running Shoes',
      category: 'Sports',
      price: 89.99,
      stock: 0,
      status: 'Out of Stock',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 4,
      name: 'Laptop Backpack',
      category: 'Accessories',
      price: 49.99,
      stock: 67,
      status: 'In Stock',
      image: 'https://via.placeholder.com/50',
    },
    {
      id: 5,
      name: 'Coffee Maker',
      category: 'Home',
      price: 129.99,
      stock: 12,
      status: 'Low Stock',
      image: 'https://via.placeholder.com/50',
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'In Stock':
        return 'bg-green-100 text-green-800';
      case 'Out of Stock':
        return 'bg-red-100 text-red-800';
      case 'Low Stock':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:shadow-lg text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Product</span>
        </button>
      </div>

      <div className="bg-white/70 backdrop-blur-lg rounded-2xl border border-gray-200/50 shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/80 transition-all"
              />
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 bg-white/80 transition-all">
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Sports</option>
              <option>Accessories</option>
              <option>Home</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.category}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${product.price}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{product.stock}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Edit className="w-5 h-5" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
