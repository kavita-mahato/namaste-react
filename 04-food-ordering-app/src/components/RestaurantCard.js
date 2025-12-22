import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData, onClick } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } = resData?.info;
    return (
        <div className="
        w-82.5 h-115
        flex flex-col
        overflow-hidden
        border border-neutral-700
        p-2
        font-segoe font-bold
        text-[#242323]
        rounded-[20px]
        m-[15px_20px]
        transition-transform duration-300 ease-in-out
        cursor-pointer
        hover:border-black
        hover:scale-[1.025]
        hover:shadow-[0_8px_12px_rgba(0,0,0,0.2)]" style={{ backgroundColor: '#fff5efff' }} onClick={onClick}>
            <div className="h-[50%]">   
                <img
                    className="w-full h-full object-cover rounded-[20px]"
                    src={CDN_URL + cloudinaryImageId}
                    alt="Restaurant Image"
                />
            </div>
            <div className="mx-2.5">
                <h3 className="my-1.5 text-[150%]">{name}</h3>
                <h4 className="my-1 text-[100%] font-normal">{cuisines.join(", ")}</h4>
                <h4 className="my-1 text-[100%] font-normal">{avgRating}</h4>
                <h4 className="my-1 text-[100%] font-normal">{costForTwo}</h4>
                <h4 className="my-1 text-[100%] font-normal">{sla.deliveryTime} Minutes</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;