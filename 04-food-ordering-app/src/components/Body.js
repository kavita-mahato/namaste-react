import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { RESTAURANT_API } from '../utils/constants';
import useOnlineStatus from '../utils/useOnlineStatus';

import { IoClose } from "react-icons/io5";
import { MdWifiOff } from "react-icons/md";

const Body = () => {
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);
    const [filteredListOfRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(RESTAURANT_API);
            const json = await data.json();
            const restaurantsData =
                json?.data?.cards?.find((item) =>
                    item?.card?.card?.id?.includes('restaurant_grid_listing_v2')
                )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            setRestaurants(restaurantsData);
            setFilteredRestaurant(restaurantsData);
        } catch (err) {
            console.error(err);
        }
    };

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-[rgb(250,209,201)]">
        
        {/* Icon */}
        <MdWifiOff size={72} className="text-gray-700 mb-4" />

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
            You’re Offline
        </h1>

        {/* Message */}
        <p className="text-gray-700 max-w-md mb-6">
            Looks like your internet connection is unavailable.
            Please check your network and try again.
        </p>

        {/* Sub text */}
        <p className="text-sm text-gray-500">
            We’ll automatically reconnect once you’re back online.
        </p>
        </div>
    );
    }

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="bg-[rgb(250, 209, 201)]">
            <div className="max-w-5xl mx-auto my-8 px-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">

                {/* Search Input Wrapper */}
                <div className="relative flex-1 w-full">
                <input
                    type="text"
                    data-testid="searchInput"
                    placeholder="Search restaurants by name..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="
                    w-full
                    px-4 py-3 pr-10
                    text-gray-700 text-[16px]
                    border border-gray-300
                    rounded-lg
                    shadow-sm
                    focus:outline-none
                    focus:ring-2 focus:ring-orange-400
                    focus:border-orange-400
                    "
                />

                {/* Clear (X) Icon */}
                {searchText && (
                    <button
                    onClick={() => {
                        setSearchText("");
                        setFilteredRestaurant(restaurants);
                    }}
                    className="
                        absolute right-3 top-1/2 -translate-y-1/2
                        text-gray-400
                        hover:text-gray-700
                        transition
                    "
                    aria-label="Clear search"
                    >
                    <IoClose size={18} />
                    </button>
                )}
                </div>

                {/* Search Button */}
                <button
                className="
                    px-6 py-3
                    bg-gray-900 text-white
                    rounded-lg
                    font-medium
                    hover:bg-gray-800
                    transition-colors
                "
                onClick={() => {
                    const filteredRestaurant = restaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestaurant(filteredRestaurant);
                }}
                >
                Search
                </button>

                {/* Top Rated Button */}
                <button
                className="
                    px-6 py-3
                    border border-gray-900
                    text-gray-900
                    rounded-lg
                    font-medium
                    hover:bg-gray-900 hover:text-white
                    transition-colors
                "
                onClick={() => {
                    const filteredList = restaurants.filter(
                    (res) => res.info.avgRating > 4.1
                    );
                    setFilteredRestaurant(filteredList);
                }}
                >
                Top Rated
                </button>
            </div>
            </div>

            {/* Restaurant Cards Container */}
            <div className="flex flex-wrap w-screen justify-center gap-10">
                {filteredListOfRestaurant.map((restaurant) => {
                    const { id } = restaurant.info;
                    return (
                        <RestaurantCard
                            key={id}
                            resData={restaurant}
                            onClick={() => navigate(`/restaurants/${id}`)}
                        />
                    );
                })}
            </div>

            {/* Footer */}
            <div className="my-10 text-center text-gray-500 text-l">
                © 2025 FOODIE. All rights reserved.
            </div>
        </div>
    );
};

export default Body;