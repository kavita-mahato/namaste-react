import { FaShoppingCart } from "react-icons/fa";

// Example products array
const products = [
  { id: 1, name: "Fresh Apples", price: "₹90.00 / kg", image: "https://tse1.mm.bing.net/th/id/OIP.-HNtBgRFYlG4Y7mrrkJBcQHaE0?rs=1&pid=ImgDetMain&o=7&rm=3" },
  { id: 2, name: "Organic Bananas", price: "₹60.00 / dozen", image: "https://thumbs.dreamstime.com/b/bunch-bananas-lies-counter-shop-bunch-sweet-bananas-lie-counter-grocery-store-356028590.jpg" },
  { id: 3, name: "Milk", price: "₹100.00 / L", image: "https://th.bing.com/th/id/OIP.6qJBpZgB_k2b9jntQvnFJQHaHa?w=197&h=200&c=7&r=0&o=5&pid=1.7" },
  { id: 4, name: "Bread", price: "₹50.00 / kg", image: "https://tse1.mm.bing.net/th/id/OIP.VJbJQnV8J9utHoDGXV6xuQHaGe?rs=1&pid=ImgDetMain&o=7&rm=3" },
];

const Grocery = () => {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-5xl font-bold text-green-800 mb-4">
          Welcome to <span className="text-green-600">Foodie Grocery</span>
        </h1>
        <p className="text-gray-700 text-lg">
          Shop fresh groceries online from the comfort of your home. High-quality products delivered fast!
        </p>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.price}</p>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors">
              <FaShoppingCart /> Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Optional Footer */}
      <div className="mt-16 text-center text-gray-500 text-l">
        © 2025 FOODIE Grocery. All rights reserved.
      </div>
    </div>
  );
};

export default Grocery;
