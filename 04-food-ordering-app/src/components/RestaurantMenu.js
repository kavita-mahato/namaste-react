import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import ItemCategory from './ItemCategory';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const { resInfo, resMenu } = useRestaurantMenu(resId);
    // console.log(resId);

    const {name, cuisines, costForTwoMessage, categoryId, avgRating, sla, areaName} = resInfo?.card?.card?.info || {};

    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>{name}</h1>
            <div className='restaurantInfo'>
                <p className='infoLine'>
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
                <p className='infoLine'>{avgRating}⭐</p>
                <p className='infoLine'>Outlet: {areaName}</p>
                <p className='infoLine'>{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</p>
            </div>
            <h3 className='menuTxt'>~~~ Menu ~~~</h3>
            {
                resMenu?.map((category, index) => <ItemCategory key={category.categoryId || `category-${index}`} data={category}/>)
            }
            
        </div>
    );
};

export default RestaurantMenu;
