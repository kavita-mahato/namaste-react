import { useState } from "react";
import MenuItem from "./MenuItem";

const ItemCategory = (props) => {
    // console.log(props);
    const {title, itemCards} = props?.data;
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    }
    return(
        <div className="bg-gray-100 flex-col justify-center">
            <div className="
            bg-gray-100
            shadow-lg 
            font-poppins
            border-b-3
            border-black
            flex justify-between
            text-3xl
            font-semibold
            p-3.75 my-7
            cursor-pointer
            " onClick={handleClick} >
                <span>{title} ({(itemCards?.length)})</span>
                <img 
                    width="48" height="48" 
                    src="https://img.icons8.com/sf-regular-filled/48/circled-chevron-up.png" alt="circled-chevron-up" 
                    className={`transition-transform duration-300 ${showItems ? "rotate-180" : "rotate-0"}`}
                />
            </div>
            <ul className="
            font-poppins
            ">
                {
                    showItems && 
                    itemCards.map((item, index) => (
                        <MenuItem 
                            key={item?.card?.info?.id || `item-${index}`} 
                            menuInfo={item?.card?.info}
                        />
                    ))
                }
            </ul>
        </div>
    )
}

export default ItemCategory;