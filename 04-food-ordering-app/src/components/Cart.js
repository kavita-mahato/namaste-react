import { useSelector, useDispatch } from "react-redux";
import MenuItem from "./MenuItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            🛒 Your Cart
          </h1>

          {cartItems.length > 0 && (
            <button
              onClick={() => dispatch(clearCart())}
              className="
                px-6 py-2 rounded-full
                bg-red-100 text-red-600 font-semibold
                hover:bg-red-500 hover:text-white
                transition-all duration-200
              "
            >
              Clear Cart
            </button>
          )}
        </div>

        {/* Cart Content */}
        <div className="bg-white rounded-xl shadow-md p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500 mb-2">
                Your cart is empty 😔
              </p>
              <p className="text-gray-400">
                Add some delicious food to get started!
              </p>
            </div>
          ) : (
            <ul className="divide-y">
              {cartItems.map((item, index) => (
                <MenuItem
                  key={item?.id || `cart-item-${index}`}
                  menuInfo={item}
                  showAddButton={false}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;