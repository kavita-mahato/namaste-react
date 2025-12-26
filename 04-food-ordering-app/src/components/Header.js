import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { FaHome, FaShoppingCart, FaShoppingBasket, FaInfoCircle, FaEnvelope, FaSignOutAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState('Sign In');

    const {loggedInUser} = useContext(UserContext);
    console.log(loggedInUser);

    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex
                    justify-between 
                    bg-orange-200
                    py-2
                    shadow-[0_8px_10px_-6px_rgba(0,0,0,0.25)]
                    sticky top-0 z-50
                    ">
            <div className="flex items-center">
                <img className="w-15 ml-5 my-2 mr-2 rounded-full" src={LOGO_URL} />
                <h1 className='font-fantasy text-3xl font-bold'>FOODIE</h1>
            </div>
            <div className="nav-items">
                <ul className='flex list-none px-5 text-lg font-semibold text-[#444] font-poppins'>
                    <li className="p-2.5 m-2.5">
                        <Link to="/" className="flex items-center gap-2">
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/cart" className="flex items-center gap-2">
                            <FaShoppingCart /> Cart({cartItems.length})
                        </Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/grocery" className="flex items-center gap-2">
                            <FaShoppingBasket /> Grocery
                        </Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/about" className="flex items-center gap-2">
                            <FaInfoCircle /> About Us
                        </Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/contact" className="flex items-center gap-2">
                            <FaEnvelope /> Contact Us
                        </Link>
                    </li>
                    <button
                        className="px-2 cursor-pointer flex items-center gap-2"
                        onClick={() => {
                            btnName === 'Sign In'
                                ? setBtnName('Sign Out')
                                : setBtnName('Sign In');
                        }}
                    >
                        <Link to="/signin" className='flex items-center gap-2'>
                        <FaSignOutAlt /> {btnName}
                        </Link>
                    </button>
                    <li className='py-2.5 px-2 my-2.5 mx-2 font-semibold'>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
