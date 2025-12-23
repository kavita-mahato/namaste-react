import { LOGO_URL } from '../utils/constants';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [btnName, setBtnName] = useState('Sign In');

    useEffect(() => {
        console.log('useEffect called');
    }, [btnName]);

    return (
        <div className="flex
                    justify-between 
                    border-4 
                    border-orange-500 
                    rounded-2xl 
                    bg-orange-200
                    my-4
                    mx-6 shadow-lg">
            <div className="flex items-center">
                <img className="w-15 ml-5 my-2 mr-2 rounded-full" src={LOGO_URL} />
                <h1 className='font-fantasy text-3xl font-bold'>FOODIE</h1>
            </div>
            <div className="nav-items">
                <ul className='flex list-none px-5 text-lg font-semibold text-[#444] font-poppins'>
                    <li className="p-2.5 m-2.5">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/offers">Offers</Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-2.5 m-2.5">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button
                        className="px-2 cursor-pointer"
                        onClick={() => {
                            btnName === 'Sign In'
                                ? setBtnName('Sign Out')
                                : setBtnName('Sign In');
                        }}
                    >
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
