import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { RESTAURANT_API } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const navigate = useNavigate();
    const [restaurants, setRestaurants] = useState([]);
    const [filteredListOfRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        try{
            const data = await fetch(RESTAURANT_API);
            const json = await data.json();
            const restaurantsData = json?.data?.cards?.find((item) => 
                item?.card?.card?.id?.includes("restaurant_grid_listing_v2"))?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            console.log(restaurantsData);
            setRestaurants(restaurantsData);
            setFilteredRestaurant(restaurantsData);
        }catch(err){
            console.err(err);
        }
    };

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h1>Looks like you are offline! Please Check your internet connection</h1>
        );
    }

    return restaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className='filter'>
                <div className='search'>
                        <input type='text' className='search-box' value={searchText} onChange={(e) => {
                            setSearchText(e.target.value);
                        }}/>
                        <button className='search-btn' onClick={() => {
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
                            (res) => res.info.avgRating > 4.1
                        );
                        setFilteredRestaurant(filteredList);
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
                        onClick={(e) => {
                            navigate(`/restaurants/${restaurant.info.id}`);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;