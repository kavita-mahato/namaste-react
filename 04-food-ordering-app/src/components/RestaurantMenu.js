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
        <div className="my-5 mx-12.5 py-0.5 px-5">
            <h1>{name}</h1>
            <div className="
                py-5
                px-7.5
                rounded-[15px]
                shadow-[0_8px_12px_rgba(22,22,22,0.2)]
                bg-[rgb(252,201,155)]
                font-medium
                font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]
                ">
                <p className="my-0.75">
                    {cuisines.join(", ")} - {costForTwoMessage}
                </p>
                <p className="my-0.75">{avgRating}⭐</p>
                <p className="my-0.75">Outlet: {areaName}</p>
                <p className="my-0.75">{sla.minDeliveryTime}-{sla.maxDeliveryTime} mins</p>
            </div>
            <h3 className="
            text-center
            font-['Lucida_Sans','Lucida_Sans_Regular','Lucida_Grande','Lucida_Sans_Unicode',Geneva,Verdana,sans-serif]
            ">~~~ Menu ~~~</h3>
            {
                resMenu?.map((category, index) => <ItemCategory key={category.categoryId || `category-${index}`} data={category}/>)
            }
            
        </div>
    );
};

export default RestaurantMenu;
