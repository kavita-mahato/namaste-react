import { resList } from '../utils/constants';
import { useState } from 'react';
import RestaurantCard from './RestaurantCard';

const Body = () => {
    const [restaurants, setRestaurants] = useState(resList);
    return (
        <div className="body">
            <button
                className="filter-btn"
                onClick={() => {
                    const filteredList = restaurants.filter(
                        (res) => res.info.avgRating >= 4.4
                    );
                    setRestaurants(filteredList);
                }}
            >
                Top Rated Restaurant
            </button>
            <div className="res-container">
                {restaurants.map((restaurant) => (
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
