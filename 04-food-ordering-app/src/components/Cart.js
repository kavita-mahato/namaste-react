import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import MenuItem from "./MenuItem";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    return (
        <div className="m-10 p-10 text-2xl">
            Here is your Cart
            <div className="w-9/12 m-auto">
                {cartItems.length > 0 && (
                    <button
                    onClick={() => dispatch(clearCart())}
                    className="mt-4 px-6 py-2 rounded-full
                    bg-red-100 text-red-500 font-semibold
                    hover:bg-red-500 hover:text-white
                    transition-all duration-200 cursor-pointer"
                    >
                    Clear Cart
                    </button>
                )}
                <ul>
                    {cartItems.length === 0 ? (
                        <p className="text-lg text-gray-500 ">Your cart is empty</p>
                    ) : (
                        cartItems.map((item, index) => (
                            <MenuItem 
                                key={item?.id || `cart-item-${index}`} 
                                menuInfo={item}
                            />
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Cart;