import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import swiggyAPI from '../utils/swiggyAPI.json';

const RestaurantMenu = () => {
    const { resId } = useParams();
    // console.log(resId);
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([]);

    useEffect(() => {
        // console.log(swiggyAPI);
        const menuData = swiggyAPI?.data?.cards
            ?.find((obj) => obj?.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(obj => 
                obj?.card?.card["@type"]?.includes("ItemCategory")
        );

        const organanizedmenuData = menuData?.map((item) => {
            const type = item?.card?.card["@type"];
            const categoryId = item?.card?.card?.categoryId;
            const title = item?.card?.card?.title;
            const itemCards = item?.card?.card?.itemCards || [];
            return{
                categoryId,
                title,
                type,
                itemCards
            }
        });

        // console.log(menuData);

        setResInfo(swiggyAPI?.data?.cards?.find((item) => 
            item?.card?.card["@type"]?.includes(
                "food.v2.Restaurant"
            ))
        );
        setResMenu(organanizedmenuData);

    }, []);
    // console.log(resInfo);
    console.log(resMenu);

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
                resMenu?.map((category) => <ItemCategory key={category.categoryId} data={category}/>)
            }
            
        </div>
    );
};

const ItemCategory = (props) => {
    console.log(props);
    const {title, itemCards} = props?.data;
    return(
        <div>
            <h2 className='category'>
                {title} ({(itemCards?.length)})
            </h2>
            <ul className='menuItems'>
                {
                    itemCards.map((item) => (
                        <MenuItem key={item?.card?.info?.id} menuInfo={item?.card?.info}/>
                    ))
                }
            </ul>
        </div>
    )
}

const MenuItem = (props) => {
    // console.log(props);

    const RESTAURANT_MENU_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

    const {name, price, description, imageId, ratings} = props.menuInfo;
    return <li className='itemsInfo'>
        <div>    
            <h4 className='infoItem dishName'>{name}</h4>
            <p className='infoItem'>Rs.{(price/100)?.toFixed(2)}/_ only</p>
            {ratings.aggregatedRating.rating && 
            <p className='infoItem'>{ratings.aggregatedRating.rating}⭐({ratings.aggregatedRating.ratingCountV2})</p>}
            <p className='infoItem itemDes'>{description}</p>
        </div>
        <div>
            {imageId && <img className='itemImg' src={RESTAURANT_MENU_IMG + imageId}/>} 
        </div>
    </li>;
}

export default RestaurantMenu;
