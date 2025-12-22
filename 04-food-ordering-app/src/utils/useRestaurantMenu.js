import { useEffect, useState } from "react";
import swiggyAPI from './swiggyAPI.json';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    const [resMenu, setResMenu] = useState([]);
    
    // fetchdata
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

        setResInfo(swiggyAPI?.data?.cards?.find((item) => 
            item?.card?.card["@type"]?.includes(
                "food.v2.Restaurant"
            ))
        );
        setResMenu(organanizedmenuData);

    }, []);
    return { resInfo, resMenu };
}

export default useRestaurantMenu;