import { resList } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = (props) => {
    const { resData } = props;
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
                }
            </div>
        </div>
    );
};

export default Body;