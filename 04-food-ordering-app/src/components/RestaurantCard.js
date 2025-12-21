import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData, onClick } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor: '#fff5efff' }} onClick={onClick}>
            <div className="res-img-wrapper">   
                <img
                    className="res-img"
                    src={CDN_URL + cloudinaryImageId}
                    alt="Restaurant Image"
                />
            </div>
            <div className="resCardInfo">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating}</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.deliveryTime} Minutes</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;