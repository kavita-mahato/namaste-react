import { resList } from '../utils/constants';
import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredListOfRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.66790&lng=86.15650&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return restaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className='filter'>
                <div className='search'>
                        <input type='text' className='search-box' value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }}/>
                        <button className='search-btn' onClick={() => {
                            // TODO : Filter Cards and Update UI
                            console.log(searchText);
                            const filteredRestaurant = restaurants.filter(
                                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurant(filteredRestaurant);
                        }}>Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = restaurants.filter(
                            (res) => res.info.avgRating >= 4
                        );
                        setRestaurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filteredListOfRestaurant.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.info.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;