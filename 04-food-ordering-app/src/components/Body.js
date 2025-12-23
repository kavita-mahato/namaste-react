import { useEffect, useState } from 'react';
import RestaurantCard, { withOpenLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { RESTAURANT_API } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);
    const [filteredListOfRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState('');

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

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

            console.log(restaurantsData);
            setRestaurants(restaurantsData);
            setFilteredRestaurant(restaurantsData);
        } catch (err) {
            console.error(err);
        }
    };
    // console.log(restaurants);
    // console.log(filteredListOfRestaurant);

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1>
                Looks like you are offline! Please Check your internet
                connection
            </h1>
        );
    }

    return restaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="bg-[rgb(250, 209, 201)]">
            <div className="flex flex-wrap justify-center">
                <div className="search">
                    <input
                        type="text"
                        className="
                        p-2.5
                        px-5
                        rounded-tl-[25px]
                        rounded-bl-[25px]
                        text-[17px]
                        font-poppins
                        bg-[rgb(243,180,122)]
                        "
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="
                            my-2.5
                            p-2.5
                            px-5
                            rounded-tr-[25px]
                            rounded-br-[25px]
                            font-poppins
                            font-semibold
                            text-[17px]
                            text-[rgb(240,239,239)]
                            bg-[rgb(253,85,18)]
                            "
                        onClick={() => {
                            console.log(searchText);
                            const filteredRestaurant = restaurants.filter(
                                (res) =>
                                    res.info.name
                                        .toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurant(filteredRestaurant);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="
                        m-2.5
                        p-2.5
                        px-5
                        rounded-[25px]
                        cursor-pointer
                        font-poppins
                        font-semibold
                        text-[17px]
                        text-[rgb(240,239,239)]
                        bg-[rgb(253,85,18)]
                        "
                    onClick={() => {
                        const filteredList = restaurants.filter(
                            (res) => res.info.avgRating > 4.1
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="flex flex-wrap w-screen justify-center">
                {filteredListOfRestaurant.map((restaurant) => {
                    const { id } = restaurant.info;
                    return restaurant.info.isOpen ? (
                        <RestaurantCardOpen
                            key={id}
                            resData={restaurant}
                            onClick={() => navigate(`/restaurants/${id}`)}
                        />
                    ) : (
                        <RestaurantCard
                            key={id}
                            resData={restaurant}
                            onClick={() => navigate(`/restaurants/${id}`)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;
