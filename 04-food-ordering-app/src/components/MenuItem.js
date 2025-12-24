import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItem = ({ menuInfo }) => {

    const RESTAURANT_MENU_IMG = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

    const {name, price, description, imageId, ratings} = menuInfo || {};

    const dispatch = useDispatch();
    const handleAddItem = () => {
        // Dispatch an action
        dispatch(addItem(menuInfo));
    }

    return <li className="
                my-7.5
                flex justify-between
                py-5 px-7.5
                shadow-[0_8px_10px_-6px_rgba(0,0,0,0.25)]
                font-medium
                font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]
                ">
        <div>    
            <h4 className="my-1.75   font-bold text-[#242323] text-lg font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">{name}</h4>
            <p className="my-1.75">₹{(price/100)?.toFixed(2)}/_ only</p>
            {ratings?.aggregatedRating?.rating && 
            <p className="my-1.75">{ratings.aggregatedRating.rating}⭐({ratings.aggregatedRating.ratingCountV2})</p>}
            <p className="my-1.75 font-medium text-[#242323] pr-10">{description}</p>
        </div>
        <div>
            {imageId && 
                <div className="relative">
                    <img 
                        className="rounded-[15px] shadow-[0_8px_12px_rgba(0,0,0,0.2)] w-30%" 
                        src={RESTAURANT_MENU_IMG + imageId}
                    />
                    <button
                        onClick={handleAddItem}
                        className="
                        absolute -bottom-3 left-1/2 -translate-x-1/2
                        bg-white text-green-600 font-bold
                        px-6 py-1 rounded-lg
                        shadow-md hover:shadow-lg
                        cursor-pointer
                        "
                    >
                        ADD +
                    </button>
                </div>
            } 
        </div>
    </li>;
}

export default MenuItem;